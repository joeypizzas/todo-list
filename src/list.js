// List class

class List {
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
}