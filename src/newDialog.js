// JS for new dialog

import { lists } from "./list.js";
import { List } from "./list.js";
import { addHomePage, removeHomePage } from "./homeView.js";
import { saveData } from "./storage.js";
import { ToDo } from "./todo.js";

const root = document.documentElement;
const newDialog = document.querySelector("#new-dialog");
const lhn = document.querySelector("#lhn");
const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const closeNewModalButton = document.querySelector("#close-new-modal-button");
const newSave = document.querySelector("#new-save");
const radioButtons = document.querySelector(".radio-buttons");
const checkedRadioButton = radioButtons.querySelector("input[name='todo-or-list']:checked");
const newToDoName = document.querySelector("#new-todo-name");
const newToDoDescription = document.querySelector("#new-todo-description");
const newToDoDue = document.querySelector("#new-todo-due");
const newToDoList = document.querySelector("#new-todo-list");

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
        newToDoList.appendChild(toDoListOption);
    }
}

function hideNewDialog() {
    newDialog.close();
    lhn.classList.remove("blur");
    header.classList.remove("blur");
    main.classList.remove("blur");
    footer.classList.remove("blur");
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

    if (checkedRadioButton.value === "To-Do") { // typeerror here
        const newToDo = new ToDo(newToDoName.value, newToDoDue.value, newToDoDescription.value, "No", newToDoList.value);
        for (const list of lists.getAllLists()) {
            if (list.name === newToDoList.value) {
                list.addToDo(newToDo);
            }
        }
    }
    
    // Check whether todo or list
    // if todo, get values of all fields and create new todo, then locate matching list and add it 
    // if list, create new list 
    // replace inputs, save data, remove home page, add home page, hide dialog

    newToDoList.replaceChildren();
    saveData();
    removeHomePage();
    addHomePage();
    hideEditToDoDialog();
});