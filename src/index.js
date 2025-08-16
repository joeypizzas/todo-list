// Main JS for todo list

import "./style.css";
import { ToDo } from "./todo.js";
import { lists } from "./list.js";
import { List } from "./list.js";
import { profile } from "./profile.js";
import { saveData, loadData } from "./storage.js";
import { initLHNListeners } from "./lhnView.js";
import { initProfileListeners } from "./profileView.js";
import { initHeaderListeners } from "./headerView.js";

const list = new List ("Personal");
lists.addNewList(list);

const list2 = new List ("Work");
lists.addNewList(list2);


const toDo1 = new ToDo("Work on coding course", "2025-08-03", "I want to spend 3 hours working on my coding course", "Yes", lists.getAllLists().find(list => list.name === "Personal").name);
const toDo2 = new ToDo("Go to the movies", "2025-08-03", "I'm going to see Fantastic Four today", "No", lists.getAllLists().find(list => list.name === "Personal").name);
const toDo3 = new ToDo("Workout", "2025-08-03", "I'm going to do a chest and triceps workout", "No", lists.getAllLists().find(list => list.name === "Personal").name)

list.addToDo(toDo1);
list.addToDo(toDo2);
list.addToDo(toDo3);

initLHNListeners();
initProfileListeners();
initHeaderListeners();