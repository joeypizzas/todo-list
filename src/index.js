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
import { addHomePage } from "./homeView.js";

const personal = new List ("Personal");
lists.addNewList(personal);

const work = new List ("Work");
lists.addNewList(work);

const fitness = new List ("Fitness");
lists.addNewList(fitness);


const personal1 = new ToDo("Work on coding course", "2025-08-10", "I want to spend 3 hours working on my coding course because it's a very fun thing that I like to do a lot and I want to get better", "No", lists.getAllLists().find(list => list.name === "Personal").name);
const personal2 = new ToDo("Finish Stranger Things", "2025-08-07", "I'm going to re-watch all 4 seasons of Stranger Things", "No", lists.getAllLists().find(list => list.name === "Personal").name);
const personal3 = new ToDo("Get groceries", "2025-08-14", "I'm going to get my groceries for the week", "Yes", lists.getAllLists().find(list => list.name === "Personal").name);
personal.addToDo(personal1);
personal.addToDo(personal2);
personal.addToDo(personal3);

const work1 = new ToDo("Go to the office three times", "2025-08-22", "I want to go to the office three times this week", "No", lists.getAllLists().find(list => list.name === "Work").name);
const work2 = new ToDo("Write G&R draft", "2025-08-23", "I want to write my new G&R app draft this week", "No", lists.getAllLists().find(list => list.name === "Work").name);
const work3 = new ToDo("Send design doc for review", "2025-08-15", "I need to send my new design doc for company-wide review", "Yes", lists.getAllLists().find(list => list.name === "Work").name);
work.addToDo(work1);
work.addToDo(work2);
work.addToDo(work3);

const fitness1 = new ToDo("Run 1,500 miles", "2025-12-31", "I'd like to run 1,500 miles this year", "No", lists.getAllLists().find(list => list.name === "Fitness").name);
const fitness2 = new ToDo("Run 900 miles through August", "2025-08-01", "I want to run 900 miles through the year by August", "Yes", lists.getAllLists().find(list => list.name === "Fitness").name);
const fitness3 = new ToDo("Run the NYC marathon", "2026-11-04", "I want to train for and run the NYC marathon next year", "No", lists.getAllLists().find(list => list.name === "Fitness").name);
fitness.addToDo(fitness1);
fitness.addToDo(fitness2);
fitness.addToDo(fitness3);

initLHNListeners();
initProfileListeners();
initHeaderListeners();
addHomePage();