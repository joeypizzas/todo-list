// To-do class

export class ToDo {
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