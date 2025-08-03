// Local storage module

import { lists } from "./list.js";
import { ToDo } from "./todo.js";
import { List } from "./list.js";

export function saveData() {
    const data = lists.getAllLists().map(list => ({
        name: list.name, 
        toDos: list.toDos.map(todo => ({
            name: todo.name,
            dueDate: todo.dueDate,
            description: todo.description,
            isComplete: todo.isComplete,
            list: todo.list
        }))
    }));

    localStorage.setItem("lists", JSON.stringify(data));
}

export function loadData() {
    const savedData = localStorage.getItem("lists");
    const rawLists = JSON.parse(savedData);

    const rehydratedLists = rawLists.map(eachList => {
        const list = new List(eachList.name);
        eachList.toDos.forEach(eachToDo => {
            const toDo = new ToDo(eachToDo.name, eachToDo.dueDate, eachToDo.description, eachToDo.isComplete, eachToDo.list);
            list.addToDo(toDo);
        });
        return list;
    });

    lists.setAllLists(rehydratedLists);
}

// Add profile persistence