// To-do class

class ToDo {
    constructor(name, dueDate, description, isComplete, list) {
        this.name = name;
        this.dueDate = dueDate;
        this.description = description;
        this.isComplete = isComplete;
        this.list = list;
    }

    editName(updatedName) {
        this.name = updatedName;
    }

    editDueDate(updatedDueDate) {
        this.dueDate = updatedDueDate;
    }

    editDescription(updatedDescription) {
        this.description = updatedDescription;
    }

    editIsComplete(updatedIsComplete) {
        this.isComplete = updatedIsComplete;
    }

    editList(updatedList) {
        this.list = updatedList;
    }
}

export function printToDo(name, dueDate, description, isComplete, list) {
    const toDo = new ToDo(name, dueDate, description, isComplete, list);
    console.log(toDo);
}