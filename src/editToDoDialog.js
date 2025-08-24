// JS for edit to-do modal

import { lists } from "./list.js";

const editToDoDialog = document.querySelector("#edit-todo-dialog");
const lhn = document.querySelector("#lhn");
const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const toDoName = document.querySelector("#todo-name");
const toDoDescription = document.querySelector("#todo-description");
const toDoDue = document.querySelector("#todo-due");
const toDoList = document.querySelector("#todo-list");

export function showEditToDoDialog(clickedToDoId) {
    editToDoDialog.show();
    lhn.classList.add("blur");
    header.classList.add("blur");
    main.classList.add("blur");
    footer.classList.add("blur");

    for (const list of lists.getAllLists()) {
        for (const todo of list.toDos) {
            if (clickedToDoId === todo.id) {
               toDoName.value = todo.name;
               toDoDescription.value = todo.description;
               toDoDue.value = todo.dueDate;
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