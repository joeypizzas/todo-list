// JS for Home DOM

import { lists } from "./list.js";
import { svg } from "./svgUtils.js";
import { ToDo } from "./todo.js";
import { saveData } from "./storage.js";
import { showEditToDoDialog } from "./editToDoDialog.js";
import { initLHNListeners, addLHNLists, removeLHNLists } from "./lhnView.js";

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
        gridListItem.dataset.id = list.id;
        listsGrid.appendChild(gridListItem);

        const homeListHeader = document.createElement("button");
        homeListHeader.classList.add("home-list-header");
        homeListHeader.textContent = list.name;
        if (list.toDos.length === 0) {
            const listNameAndDelete = document.createElement("div");
            listNameAndDelete.classList.add("list-name-and-delete");
            gridListItem.appendChild(listNameAndDelete);
            listNameAndDelete.appendChild(homeListHeader);
            const deleteListButton = document.createElement("button");
            deleteListButton.classList.add("button-edit");
            deleteListButton.classList.add("button-todo-edit");
            deleteListButton.classList.add("delete-list-button");
            deleteListButton.appendChild(svg.createTrashSVG());
            listNameAndDelete.appendChild(deleteListButton);
        } else {
            gridListItem.appendChild(homeListHeader);
        }

        homeListHeader.appendChild(svg.createArrowSVG());

        for (const todo of list.toDos) {
            const homeToDo = document.createElement("div");
            homeToDo.classList.add("home-todo");
            homeToDo.dataset.id = todo.id;
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

            const homeToDoDueEdit = document.createElement("div");
            homeToDoDueEdit.classList.add("home-todo-due-edit");
            homeToDo.appendChild(homeToDoDueEdit);

            const todoDue = document.createElement("div");
            todoDue.classList.add("todo-due");

            const buttonToDoEdit = document.createElement("button");
            buttonToDoEdit.classList.add("button-todo-edit");
            buttonToDoEdit.classList.add("button-edit");

            const storedDate = todo.dueDate;
            const [year, month, day] = storedDate.split("-");
            const dateObject = new Date(year, month - 1, day);
            const localDate = dateObject.toLocaleDateString();

            if (todo.isComplete === "No") {
                toDoName.textContent = todo.name;
                homeToDoCheckName.appendChild(toDoName);

                todoDue.textContent = `Due: ${localDate}`;
                homeToDoDueEdit.appendChild(todoDue);

                buttonToDoEdit.appendChild(svg.createPencilSVG());

            } else {
                homeToDoCheckbox.classList.add("checked");
                
                const struckName = document.createElement("s");
                struckName.classList.add("struck-name");
                struckName.textContent = todo.name;
                toDoName.appendChild(struckName);
                homeToDoCheckName.appendChild(toDoName);

                const struckDue = document.createElement("s");
                struckDue.classList.add("struck-due");
                struckDue.textContent = `Due: ${localDate}`;
                todoDue.appendChild(struckDue);
                homeToDoDueEdit.appendChild(todoDue);

                buttonToDoEdit.appendChild(svg.createTrashSVG());
            }

            homeToDoDueEdit.appendChild(buttonToDoEdit);
        }
    }

    main.appendChild(mainHome);

    const root = document.documentElement;

    const toDoCheckboxes = document.querySelectorAll(".home-todo-checkbox");
    toDoCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("mouseover", () => {
            if (!checkbox.classList.contains("checked")) {
                checkbox.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-hover");
            } else {
                checkbox.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-hover");
                checkbox.style.borderColor = getComputedStyle(root).getPropertyValue("--header-hover");
            }
        });
        checkbox.addEventListener("mouseout", () => {
            if (!checkbox.classList.contains("checked")) {
                checkbox.style.backgroundColor = getComputedStyle(root).getPropertyValue("--main-background");
            } else {
                checkbox.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header");
                checkbox.style.borderColor = getComputedStyle(root).getPropertyValue("--header");
            }

        });
        checkbox.addEventListener("mousedown", () => {
            if (!checkbox.classList.contains("checked")) {
                checkbox.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-click");
            } else {
                checkbox.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-click");
                checkbox.style.borderColor = getComputedStyle(root).getPropertyValue("--header-click");
            }
        });
        checkbox.addEventListener("mouseup", () => {
            if (!checkbox.classList.contains("checked")) {
                checkbox.classList.add("checked");
                checkbox.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-hover");
                checkbox.style.borderColor = getComputedStyle(root).getPropertyValue("--header-hover");

                const homeToDo = checkbox.closest(".home-todo");

                const toDoName = homeToDo.querySelector(".todo-name");
                const struckName = document.createElement("s");
                struckName.classList.add("struck-name")
                struckName.textContent = toDoName.textContent;
                toDoName.textContent = "";
                toDoName.appendChild(struckName);

                const toDoDue = homeToDo.querySelector(".todo-due");
                const struckDue = document.createElement("s");
                struckDue.classList.add("struck-due");
                struckDue.textContent = toDoDue.textContent;
                toDoDue.textContent = "";
                toDoDue.appendChild(struckDue);

                const buttonToDoEdit = homeToDo.querySelector(".button-todo-edit");
                const pencilSVG = homeToDo.querySelector(".pencil-svg");
                buttonToDoEdit.removeChild(pencilSVG);
                buttonToDoEdit.appendChild(svg.createTrashSVG());

                for (const list of lists.getAllLists()) {
                    for (const todo of list.toDos) {
                        if (todo.name === struckName.textContent) {
                            todo.editIsComplete();
                        }
                    }
                }

            } else {
                checkbox.classList.remove("checked");
                checkbox.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-hover");
                checkbox.style.borderColor = getComputedStyle(root).getPropertyValue("--header");

                const homeToDo = checkbox.closest(".home-todo");

                const toDoName = homeToDo.querySelector(".todo-name");
                const struckName = homeToDo.querySelector(".struck-name");
                toDoName.textContent = struckName.textContent;

                const toDoDue = homeToDo.querySelector(".todo-due");
                const struckDue = homeToDo.querySelector(".struck-due");
                toDoDue.textContent = struckDue.textContent;

                const buttonToDoEdit = homeToDo.querySelector(".button-todo-edit");
                const trashSVG = homeToDo.querySelector(".trash-svg");
                buttonToDoEdit.removeChild(trashSVG);
                buttonToDoEdit.appendChild(svg.createPencilSVG());

                for (const list of lists.getAllLists()) {
                    for (const todo of list.toDos) {
                        if (todo.name === toDoName.textContent) {
                            todo.editIsComplete();
                        }
                    }
                }
            }
            saveData();
        }); 
    });

    const toDoEditButtons = document.querySelectorAll(".button-todo-edit");
    toDoEditButtons.forEach(editButton => {
        editButton.addEventListener("mouseover", () => {
            const svg = editButton.querySelector(".pencil-svg, .trash-svg")
            if (svg) {
                svg.style.stroke = getComputedStyle(root).getPropertyValue("--header-hover");
            }
        });
        editButton.addEventListener("mouseleave", () => {
            const svg = editButton.querySelector(".pencil-svg, .trash-svg")
            if (svg) {
                svg.style.stroke = getComputedStyle(root).getPropertyValue("--main-text");
            }
        });
        editButton.addEventListener("mousedown", () => {
            const svg = editButton.querySelector(".pencil-svg, .trash-svg") 
            if (svg) {
                svg.style.stroke = getComputedStyle(root).getPropertyValue("--header-click");
            }
        });
        editButton.addEventListener("mouseup", () => {
            const svg = editButton.querySelector(".pencil-svg, .trash-svg")
            const homeToDo = editButton.closest(".home-todo");
            let id;
            if (homeToDo) {
                id = homeToDo.dataset.id;
            }

            if (svg) {
                svg.style.stroke = getComputedStyle(root).getPropertyValue("--header-hover");
            }
            if (svg.classList.contains("pencil-svg")) {
                showEditToDoDialog(id);
            }
            if (svg.classList.contains("trash-svg")) {
                if (editButton.classList.contains("delete-list-button")) {
                    const gridListItem = editButton.closest(".grid-list-item");
                    const listToDelete = gridListItem.querySelector(".home-list-header");
                    for (const list of lists.getAllLists()) {
                        if (gridListItem.dataset.id === list.id) {
                            lists.removeList(listToDelete.textContent);
                            removeHomePage();
                            addHomePage();
                            removeLHNLists();
                            addLHNLists();
                            initLHNListeners();
                        }
                    }
                } else {
                    for (const list of lists.getAllLists()) {
                        for (const todo of list.toDos) {
                            if (id === todo.id) {
                                list.removeToDo(todo);
                                removeHomePage();
                                addHomePage();
                            }
                        }
                    }
                }
                saveData();
            }
        });
    });
}

export function removeHomePage() {
    const main = document.querySelector("#main");
    const mainHome = document.querySelector("#main-home");
    main.removeChild(mainHome);
}