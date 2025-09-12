// JS for edit to-do modal

import { lists } from "./list.js";
import { addHomePage, removeHomePage } from "./homeView.js";
import { saveData } from "./storage.js";
import { addListPage, removeListPage } from "./listView.js";

const root = document.documentElement;
const editToDoDialog = document.querySelector("#edit-todo-dialog");
const lhn = document.querySelector("#lhn");
const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const editToDoForm = document.querySelector("#edit-todo-form");
const toDoName = document.querySelector("#todo-name");
const toDoDescription = document.querySelector("#todo-description");
const toDoDue = document.querySelector("#todo-due");
const toDoList = document.querySelector("#todo-list");
const closeModalButton = document.querySelector("#close-edit-modal-button");
const editToDoSave = document.querySelector("#edit-todo-save");
const editToDoFields = document.querySelectorAll(".edit-todo-field");

export function showEditToDoDialog(clickedToDoId) {
    editToDoDialog.showModal();
    lhn.classList.add("blur");
    header.classList.add("blur");
    main.classList.add("blur");
    footer.classList.add("blur");

    for (const list of lists.getAllLists()) {
        const toDoListOption = document.createElement("option");
        toDoListOption.value = list.name;
        toDoListOption.textContent = list.name;
        toDoList.appendChild(toDoListOption);

        for (const todo of list.toDos) {
            if (clickedToDoId === todo.id) {
               toDoName.value = todo.name;
               toDoDescription.value = todo.description;
               toDoDue.value = todo.dueDate;
               toDoList.value = todo.list;
               editToDoForm.dataset.id = todo.id;
            }
        }
    }
}

export function hideEditToDoDialog() {
    editToDoDialog.close();
    lhn.classList.remove("blur");
    header.classList.remove("blur");
    main.classList.remove("blur");
    footer.classList.remove("blur");
}

closeModalButton.addEventListener("mouseover", () => {
    closeModalButton.style.color = getComputedStyle(root).getPropertyValue("--header-hover");
});
closeModalButton.addEventListener("mouseout", () => {
    closeModalButton.style.color = getComputedStyle(root).getPropertyValue("--main-text");
});
closeModalButton.addEventListener("mousedown", () => {
    closeModalButton.style.color = getComputedStyle(root).getPropertyValue("--header-click");
});
closeModalButton.addEventListener("mouseup", () => {
    closeModalButton.style.color = getComputedStyle(root).getPropertyValue("--header-hover");
    toDoList.replaceChildren();
    hideEditToDoDialog();
});

editToDoSave.addEventListener("mouseover", () => {
    editToDoSave.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-hover");
});
editToDoSave.addEventListener("mouseout", () => {
    editToDoSave.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header");
});
editToDoSave.addEventListener("mousedown", () => {
    editToDoSave.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-click");
});
editToDoSave.addEventListener("mouseup", () => {
    editToDoSave.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-hover");

    for (const list of lists.getAllLists()) {
        for (const todo of list.toDos) {
            if (todo.id === editToDoForm.dataset.id) {
                if (todo.name !== toDoName.value) {
                    todo.editName(toDoName.value);
                }
                if (todo.description !== toDoDescription.value) {
                    todo.editDescription(toDoDescription.value);
                }
                if (todo.dueDate !== toDoDue.value) {
                    todo.editDueDate(toDoDue.value);
                }
                if (todo.list !== toDoList.value) {
                    todo.editList(toDoList.value);
                    list.removeToDo(todo);

                    for (const newList of lists.getAllLists()) {
                        if (newList.name === toDoList.value) {
                            newList.addToDo(todo);
                        }
                    }
                }
            }
        }
    }
    toDoList.replaceChildren();
    saveData();
    hideEditToDoDialog();
    const mainContainer = document.querySelector(".main-container");
    if (mainContainer.id === "main-home") {
        removeHomePage();
        addHomePage();
    } else {
        removeListPage();
        addListPage(mainContainer.dataset.id);
    }
});

editToDoFields.forEach(field => { // refactor into shared file for all dialogs
    field.addEventListener("mouseover", () => {
        field.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-hover");
        field.style.borderColor = getComputedStyle(root).getPropertyValue("--header-hover");
    });
    field.addEventListener("mouseout", () => {
        field.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-text");
        field.style.borderColor = getComputedStyle(root).getPropertyValue("--header");
    });
    field.addEventListener("mousedown", () => {
        field.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-click");
        field.style.borderColor = getComputedStyle(root).getPropertyValue("--header-click");
    });
    field.addEventListener("mouseup", () => {
        field.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-text");
    });
});