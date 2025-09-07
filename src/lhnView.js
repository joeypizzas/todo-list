// JS for LHN DOM

import { lists } from "./list.js";

const listsContainer = document.querySelector("#lists-container");

export function addLHNLists() {
    for (const list of lists.getAllLists()) {
        const listLHN = document.createElement("button");
        listLHN.classList.add("item-lhn");
        listLHN.classList.add("item-lhn-child");
        listLHN.textContent = list.name;
        listsContainer.appendChild(listLHN);
    }
}

export function removeLHNLists() {
    const allLHNLists = document.querySelectorAll(".item-lhn-child");
    allLHNLists.forEach(list => {
        list.remove();
    });
}

export function initLHNListeners() {
    const root = document.documentElement;
    
    const homeButtonLHN = document.querySelector("#home-button-lhn");
    homeButtonLHN.addEventListener("mouseover", () => {
        homeButtonLHN.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-hover");
    });
    homeButtonLHN.addEventListener("mouseout", () => {
        homeButtonLHN.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn");
    });
    homeButtonLHN.addEventListener("mousedown", () => {
        homeButtonLHN.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-click");
    });
    homeButtonLHN.addEventListener("mouseup", () => {
        homeButtonLHN.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-hover");
    });

    const listItemsLHN = document.querySelectorAll(".item-lhn-child");
    listItemsLHN.forEach((list) => {
        list.addEventListener("mouseover", () => {
            list.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-hover");
        });
        list.addEventListener("mouseout", () => {
            list.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn");
        });
        list.addEventListener("mousedown", () => {
            list.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-click");
        });
        list.addEventListener("mouseup", () => {
            list.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-hover");
        });
    });
}