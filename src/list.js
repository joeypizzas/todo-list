// List class

export class List {
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

    getCompletedToDos() {
        const completedToDos = [];
        for (const toDo of this.toDos) {
            if (toDo.isComplete === "Yes") {
                completedToDos.push(toDo);
            } 
        }
        return completedToDos;
    }

    getIncompleteToDos() {
        const incompleteToDos = [];
        for (const toDo of this.toDos) {
            if (toDo.isComplete === "No") {
                incompleteToDos.push(toDo);
            }
        }
        return incompleteToDos;
    }
}

export const lists = (function listManager() {
    const allLists = [];

    function addNewList(newList) {
        allLists.push(newList);
    }

    function getAllLists() {
        return allLists;
    }

    return {
        addNewList,
        getAllLists
    }
})();