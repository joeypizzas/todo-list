// JS for edit to-do modal

const editToDoDialog = document.querySelector("#edit-todo-dialog");
const lhn = document.querySelector("#lhn");
const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");

export function showEditToDoDialog() {
    editToDoDialog.show();
    lhn.classList.add("blur");
    header.classList.add("blur");
    main.classList.add("blur");
    footer.classList.add("blur");
}

export function hideEditToDoDialog() {
    editToDoDialog.close();
    lhn.classList.remove("blur");
    header.classList.remove("blur");
    main.classList.remove("blur");
    footer.classList.remove("blur");
}