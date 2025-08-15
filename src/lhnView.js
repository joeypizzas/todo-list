// JS for LHN DOM

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