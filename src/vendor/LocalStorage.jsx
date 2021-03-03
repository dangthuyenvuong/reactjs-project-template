const LocalStorage = {
    get: (name) => {
        try {
            let data = JSON.parse(localStorage.getItem(name) || 'null');

            return data
        } catch (err) {
            return null;
        }
    },
    set: (name, value) => {
        if (typeof value !== undefined) {
            localStorage.setItem(name, JSON.stringify(value))
            return true;
        }
        return false;
    },
    remove: (name) => {
        localStorage.removeItem(name)
    }
}

export default LocalStorage