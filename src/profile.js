// Profile module

export const profile = (function manageProfile() { // Profile is just name for now, but structure supports expanding later on
    let name;

    function editName(newName) {
        return name = newName;
    }

    function getName() {
        return name;
    }

    return {
        editName, 
        getName
    }
})();