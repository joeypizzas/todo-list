// Profile module

export const profile = (function manageProfile() {
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