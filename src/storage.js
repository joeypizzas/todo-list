// Local storage module

import { lists } from "./list.js";
import { ToDo } from "./todo.js";
import { List } from "./list.js";
import { profile } from "./profile.js";

export function saveData() { // Saves lists, todos, and profile in local storage to support persistence
    const listData = lists.getAllLists().map(list => ({ // Recreates list and to-do data structure without methods for serialization
        name: list.name, 
        toDos: list.toDos.map(todo => ({
            name: todo.name,
            dueDate: todo.dueDate,
            description: todo.description,
            isComplete: todo.isComplete,
            list: todo.list
        }))
    }));

    const profileData = {
        name: profile.getName()
    };

    localStorage.setItem("lists", JSON.stringify(listData));
    localStorage.setItem("profile", JSON.stringify(profileData));
}

export function loadData() { // Loads lists, todos, and profile from local storage to support persistence
    const savedListData = localStorage.getItem("lists");
    const rawLists = JSON.parse(savedListData);
    const rehydratedLists = rawLists.map(eachList => { // Rehydrates lists and to-dos to make them class instances and re-add methods
        const list = new List(eachList.name);
        eachList.toDos.forEach(eachToDo => {
            const toDo = new ToDo(eachToDo.name, eachToDo.dueDate, eachToDo.description, eachToDo.isComplete, eachToDo.list);
            list.addToDo(toDo);
        });
        return list;
    });
    lists.setAllLists(rehydratedLists);

    const savedProfileData = localStorage.getItem("profile");
    const rawProfileData = JSON.parse(savedProfileData);
    profile.editName(rawProfileData.name);
}