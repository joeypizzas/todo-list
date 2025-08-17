// JS for Home DOM

import { lists } from "./list.js";
import { svg } from "./svgUtils.js";

export function addHomePage() {
    const main = document.querySelector("#main");

    const mainHome = document.createElement("div");
    mainHome.id = "main-home";

    const mainHomeTitle = document.createElement("div");
    mainHomeTitle.id = "main-home-title";
    mainHomeTitle.textContent = "Home";
    mainHome.appendChild(mainHomeTitle);

    const listsGrid = document.createElement("div");
    listsGrid.id = "lists-grid";
    mainHome.appendChild(listsGrid);

    for (const list of lists.getAllLists()) {
        const gridListItem = document.createElement("div");
        gridListItem.classList.add("grid-list-item");
        listsGrid.appendChild(gridListItem);

        const homeListHeader = document.createElement("button");
        homeListHeader.classList.add("home-list-header");
        homeListHeader.textContent = list.name;
        gridListItem.appendChild(homeListHeader);

        homeListHeader.appendChild(svg.createArrowSVG());

        for (const todo of list.toDos) {
            const homeToDo = document.createElement("div");
            homeToDo.classList.add("home-todo");
            gridListItem.appendChild(homeToDo);

            const homeToDoCheckName = document.createElement("div");
            homeToDoCheckName.classList.add("home-todo-check-name");
            homeToDo.appendChild(homeToDoCheckName);

            const homeToDoCheckbox = document.createElement("button");
            homeToDoCheckbox.classList.add("home-todo-checkbox");
            homeToDoCheckName.appendChild(homeToDoCheckbox);

            homeToDoCheckbox.appendChild(svg.createCheckSVG());

            const toDoName = document.createElement("div");
            toDoName.classList.add("todo-name");
            toDoName.textContent = todo.name;
            homeToDoCheckName.appendChild(toDoName);

            const homeToDoDueEdit = document.createElement("div");
            homeToDoDueEdit.classList.add("home-todo-due-edit");
            homeToDo.appendChild(homeToDoDueEdit);

            const todoDue = document.createElement("div");
            todoDue.classList.add("todo-due");
            todoDue.textContent = `Due: ${todo.dueDate}`;
            homeToDoDueEdit.appendChild(todoDue);

            const buttonToDoEdit = document.createElement("button");
            buttonToDoEdit.id = "button-todo-edit";
            buttonToDoEdit.classList.add("button-edit");
            homeToDoDueEdit.appendChild(buttonToDoEdit);

            buttonToDoEdit.appendChild(svg.createPencilSVG());
        }
    }

    main.appendChild(mainHome);
}