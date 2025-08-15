// JS for profile DOM

export function initProfileListeners() {
    const root = document.documentElement;

    const buttonProfileEdit = document.querySelector("#button-profile-edit");
    buttonProfileEdit.addEventListener("mouseover", () => {
        buttonProfileEdit.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-hover");
    });
    buttonProfileEdit.addEventListener("mouseout", () => {
        buttonProfileEdit.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn");
    });
    buttonProfileEdit.addEventListener("mousedown", () => {
        buttonProfileEdit.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-click");
    });
    buttonProfileEdit.addEventListener("mouseup", () => {
        buttonProfileEdit.style.backgroundColor = getComputedStyle(root).getPropertyValue("--lhn-hover");
    });
}