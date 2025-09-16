// Main JS for todo list

import "./style.css";
import { loadLists } from "./list.js";
import { addLHNLists, initLHNListeners, } from "./lhnView.js";
import { initHeaderListeners } from "./headerView.js";
import { addHomePage } from "./homeView.js";

// Initalizes home page and LHN
loadLists();
addLHNLists();
initLHNListeners();
initHeaderListeners();
addHomePage();