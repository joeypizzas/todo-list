// JS for Header DOM

export function initHeaderListeners() {
    const root = document.documentElement;
    const homeNewButton = document.querySelector("#home-new-button");
    const plusSVG = document.querySelector(".plus-svg");

    homeNewButton.addEventListener("mouseover", () => {
        homeNewButton.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header");
        homeNewButton.style.color = getComputedStyle(root).getPropertyValue("--header-text");
        plusSVG.style.stroke = getComputedStyle(root).getPropertyValue("--header-text");
    });
    homeNewButton.addEventListener("mouseout", () => {
        homeNewButton.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-text");
        homeNewButton.style.color = getComputedStyle(root).getPropertyValue("--header");
        plusSVG.style.stroke = getComputedStyle(root).getPropertyValue("--header");
    });
    homeNewButton.addEventListener("mousedown", () => {
        homeNewButton.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header-text");
        homeNewButton.style.color = getComputedStyle(root).getPropertyValue("--header");
        plusSVG.style.stroke = getComputedStyle(root).getPropertyValue("--header");
    });
    homeNewButton.addEventListener("mouseup", () => {
        homeNewButton.style.backgroundColor = getComputedStyle(root).getPropertyValue("--header");
        homeNewButton.style.color = getComputedStyle(root).getPropertyValue("--header-text");
        plusSVG.style.stroke = getComputedStyle(root).getPropertyValue("--header-text");
    });
    
}