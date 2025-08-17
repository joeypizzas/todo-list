// JS for SVG utility functions

export const svg = (function svgUtils() {
    const svgNS = "http://www.w3.org/2000/svg";

    function createArrowSVG() {
        const arrowSVG = document.createElementNS(svgNS, "svg");
        arrowSVG.setAttribute("width", "20");
        arrowSVG.setAttribute("height", "20");
        arrowSVG.setAttribute("viewBox", "0 0 24 24");
        arrowSVG.setAttribute("fill", "none");
        arrowSVG.setAttribute("stroke", "#111827");
        arrowSVG.setAttribute("stroke-width", "2");
        arrowSVG.setAttribute("stroke-linecap", "round");
        arrowSVG.setAttribute("stroke-linejoin", "round");
        arrowSVG.classList.add("arrow-svg");
      
        const path1 = document.createElementNS(svgNS, "path");
        path1.setAttribute("d", "M18 8L22 12L18 16");
      
        const path2 = document.createElementNS(svgNS, "path");
        path2.setAttribute("d", "M2 12H22");
      
        arrowSVG.appendChild(path1);
        arrowSVG.appendChild(path2);
      
        return arrowSVG;
    }

    function createCheckSVG() {
        const checkSVG = document.createElementNS(svgNS, "svg");
        checkSVG.setAttribute("viewBox", "0 0 24 24");
        checkSVG.setAttribute("fill", "none");
        checkSVG.setAttribute("stroke", "currentColor");
        checkSVG.setAttribute("stroke-width", "2");
        checkSVG.setAttribute("stroke-linecap", "round");
        checkSVG.setAttribute("stroke-linejoin", "round");
        checkSVG.classList.add("check-svg");
      
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", "M20 6 9 17l-5-5");
      
        checkSVG.appendChild(path);
      
        return checkSVG;
    }

    function createPencilSVG() {
        const pencilSVG = document.createElementNS(svgNS, "svg");
        pencilSVG.setAttribute("width", "16");
        pencilSVG.setAttribute("height", "16");
        pencilSVG.setAttribute("viewBox", "0 0 24 24");
        pencilSVG.setAttribute("fill", "none");
        pencilSVG.setAttribute("stroke", "#111827");
        pencilSVG.setAttribute("stroke-width", "2");
        pencilSVG.setAttribute("stroke-linecap", "round");
        pencilSVG.setAttribute("stroke-linejoin", "round");
        pencilSVG.classList.add("pencil-svg");
      
        const path1 = document.createElementNS(svgNS, "path");
        path1.setAttribute(
          "d",
          "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        );
      
        const path2 = document.createElementNS(svgNS, "path");
        path2.setAttribute("d", "m15 5 4 4");
      
        pencilSVG.appendChild(path1);
        pencilSVG.appendChild(path2);
      
        return pencilSVG;
    }

    function createTrashSVG() {
        const trashSVG = document.createElementNS(svgNS, "svg");
        trashSVG.setAttribute("width", "16");
        trashSVG.setAttribute("height", "16");
        trashSVG.setAttribute("viewBox", "0 0 24 24");
        trashSVG.setAttribute("fill", "none");
        trashSVG.setAttribute("stroke", "currentColor");
        trashSVG.setAttribute("stroke-width", "2");
        trashSVG.setAttribute("stroke-linecap", "round");
        trashSVG.setAttribute("stroke-linejoin", "round");
        trashSVG.classList.add("trash-svg");
      
        const path1 = document.createElementNS(svgNS, "path");
        path1.setAttribute("d", "M10 11v6");
      
        const path2 = document.createElementNS(svgNS, "path");
        path2.setAttribute("d", "M14 11v6");
      
        const path3 = document.createElementNS(svgNS, "path");
        path3.setAttribute("d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6");
      
        const path4 = document.createElementNS(svgNS, "path");
        path4.setAttribute("d", "M3 6h18");
      
        const path5 = document.createElementNS(svgNS, "path");
        path5.setAttribute("d", "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2");
      
        trashSVG.appendChild(path1);
        trashSVG.appendChild(path2);
        trashSVG.appendChild(path3);
        trashSVG.appendChild(path4);
        trashSVG.appendChild(path5);
      
        return trashSVG;
      }

    return {
        createArrowSVG,
        createCheckSVG,
        createPencilSVG,
        createTrashSVG
    }
})()

