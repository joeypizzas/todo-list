// JS for new dialog

const root = document.documentElement;
const newDialog = document.querySelector("#new-dialog");
const lhn = document.querySelector("#lhn");
const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const closeNewModalButton = document.querySelector("#close-new-modal-button");

export function showNewDialog() {
    newDialog.showModal();
    lhn.classList.add("blur");
    header.classList.add("blur");
    main.classList.add("blur");
    footer.classList.add("blur");
}

function hideNewDialog() {
    newDialog.close();
    lhn.classList.remove("blur");
    header.classList.remove("blur");
    main.classList.remove("blur");
    footer.classList.remove("blur");
}

closeNewModalButton.addEventListener("mouseover", () => {
    closeNewModalButton.style.color = getComputedStyle(root).getPropertyValue("--header-hover");
});
closeNewModalButton.addEventListener("mouseout", () => {
    closeNewModalButton.style.color = getComputedStyle(root).getPropertyValue("--main-text");
});
closeNewModalButton.addEventListener("mousedown", () => {
    closeNewModalButton.style.color = getComputedStyle(root).getPropertyValue("--header-click");
});
closeNewModalButton.addEventListener("mouseup", () => {
    closeNewModalButton.style.color = getComputedStyle(root).getPropertyValue("--header-hover");
    hideNewDialog();
});