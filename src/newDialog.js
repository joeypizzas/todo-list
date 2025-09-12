// JS for new dialog

import { lists } from "./list.js";
import { List } from "./list.js";
import { addHomePage, removeHomePage } from "./homeView.js";
import { saveData } from "./storage.js";
import { ToDo } from "./todo.js";
import { addLHNLists, removeLHNLists, initLHNListeners } from "./lhnView.js";

const root = document.documentElement;
const newDialog = document.querySelector("#new-dialog");
const lhn = document.querySelector("#lhn");
const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const closeNewModalButton = document.querySelector("#close-new-modal-button");
const newSave = document.querySelector("#new-save");
const radioButtons = document.querySelector(".radio-buttons");
const newToDoName = document.querySelector("#new-todo-name");
const newToDoDescription = document.querySelector("#new-todo-description");
const newToDoDue = document.querySelector("#new-todo-due");
const newToDoList = document.querySelector("#new-todo-list");
const todoRadio = document.querySelector("#todo-radio");
const listRadio = document.querySelector("#list-radio");
const newDescriptionLabelAndField = document.querySelector("#new-description-label-and-field");
const newDueLabelAndField = document.querySelector("#new-due-label-and-field");
const newListLabelAndField = document.querySelector("#new-list-label-and-field");
const newForm = document.querySelector("#new-form");

export function showNewDialog() {
    newDialog.showModal();
    lhn.classList.add("blur");
    header.classList.add("blur");
    main.classList.add("blur");
    footer.classList.add("blur");

    for (const list of lists.getAllLists()) {
        const toDoListOption = document.createElement("option");
        toDoListOption.value = list.name;
        toDoListOption.textContent = list.name;
        toDoListOption.dataset.id = list.id;
        newToDoList.appendChild(toDoListOption);
    }

    todoRadio.checked = true;
}

function hideNewDialog() {
    newDialog.close();
    lhn.classList.remove("blur");
    header.classList.remove("blur");
    main.classList.remove("blur");
    footer.classList.remove("blur");
}

function showListForm() {
    newDescriptionLabelAndField.classList.add("hidden");
    newDueLabelAndField.classList.add("hidden");
    newListLabelAndField.classList.add("hidden");
}

function showToDoForm() {
    newDescriptionLabelAndField.classList.remove("hidden");
    newDueLabelAndField.classList.remove("hidden");
    newListLabelAndField.classList.remove("hidden");
}

closeNewModalButton.addEventListener("mouseover", () => {
    closeNewModalButton.style.color = getComputedStyle(root).getPropertyValue("--header-hover");
});
closeNewModalButton.addEventListener("mouseout", () => {
    closeNewModalButton.style.color = getComputedStyle(root).getPropertyValue("--main-text");
});
closeNewModalButton.addEventListener("mousedown", () => {
    closeNewModalButton.style.color = getComputedStyle(root).getPropertyValue("--header-click");
});
closeNewModalButton.addEventListener("mouseup", () => {
    closeNewModalButton.style.color = getComputedStyle(root).getPropertyValue("--header-hover");
    newToDoList.replaceChildren();
    showToDoForm();
    newForm.reset(); 
    hideNewDialog();
});

newSave.addEventListener("mouseover", () => {
    newSave.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-hover");
});
newSave.addEventListener("mouseout", () => {
    newSave.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header");
});
newSave.addEventListener("mousedown", () => {
    newSave.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-click");
});
newSave.addEventListener("mouseup", () => {
    newSave.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-hover");

    const checkedRadioButton = radioButtons.querySelector("input[name='todo-or-list']:checked");
    if (checkedRadioButton.value === "To-Do") {
        const newToDo = new ToDo(newToDoName.value, newToDoDue.value, newToDoDescription.value, "No", newToDoList.value);
        for (const list of lists.getAllLists()) {
            if (list.name === newToDoList.value) {
                list.addToDo(newToDo);
            }
        }
        const mainContainer = document.querySelector(".main-container");
        const newform = document.querySelector("#new-form");
            const listOptions = newform.querySelectorAll("option");
            listOptions.forEach(option => {
                // Not done, fix logic from here to land you on list page only if you add todo from the currently showing list
            });
        if (mainContainer.id === "main-home") {
            removeHomePage();
            addHomePage();
        } else {
        }
    } else {
        const newList = new List(newToDoName.value);
        lists.addNewList(newList);
        removeLHNLists();
        addLHNLists();
        initLHNListeners();
        removeHomePage();
        addHomePage();
    }
    newToDoList.replaceChildren();
    newForm.reset();
    saveData();
    showToDoForm();
    hideNewDialog();
});

listRadio.addEventListener("mouseup", () => {
    showListForm();
});

todoRadio.addEventListener("mouseup", () => {
    showToDoForm();
});