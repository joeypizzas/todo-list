// List class

export class List { // Creates object to group todos
    constructor(name) {
        this.name = name;
        this.toDos = [];
    }

    editName(updatedName) {
        this.name = updatedName;
    }

    addToDo(newToDo) {
        this.toDos.push(newToDo);
    }

    removeToDo(unwantedToDo) {
        this.toDos.splice(this.toDos.indexOf(unwantedToDo), 1);
    }

    getCompletedToDos() { // Returns completed todos to show them in separate section in UI
        const completedToDos = [];
        for (const toDo of this.toDos) {
            if (toDo.isComplete === "Yes") {
                completedToDos.push(toDo);
            } 
        }
        return completedToDos;
    }

    getIncompleteToDos() { // Returns incomplete todos to show them in separate section in UI
        const incompleteToDos = [];
        for (const toDo of this.toDos) {
            if (toDo.isComplete === "No") {
                incompleteToDos.push(toDo);
            }
        }
        return incompleteToDos;
    }
}

export const lists = (function listManager() { // Array to organize lists and make it easier to display them in UI
    let allLists = [];

    function addNewList(newList) {
        allLists.push(newList);
    }

    function getAllLists() {
        return allLists;
    }

    function setAllLists(listsFromStorage) {
        allLists = listsFromStorage;
    }

    return {
        addNewList,
        getAllLists,
        setAllLists
    }
})();