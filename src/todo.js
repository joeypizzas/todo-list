// To-do class

export class ToDo { // Instantiates new todos and has all methods to keep them up to date 
    constructor(name, dueDate, description, isComplete, list, id) {
        this.name = name;
        this.dueDate = dueDate;
        this.description = description;
        this.isComplete = isComplete;
        this.list = list;
        this.id = id || Date.now().toString(36) + Math.random().toString(36).substring(2, 8);

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

    editIsComplete() {
        if (this.isComplete === "No") {
            this.isComplete = "Yes";
        } else {
            this.isComplete = "No";
        }
    }

    editList(updatedList) {
        this.list = updatedList;
    }
}