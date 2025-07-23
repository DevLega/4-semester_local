function saveObject(object) {
    const key = object.name;
    const value = JSON.stringify(object);
    localStorage.setItem(key, value);
}

function clearStorage() {
    for(let key in localStorage) {
        localStorage.removeItem(key)
    }
}

const userData = {
    name: "John",
    email: "john@gmail.com",
    password: "password@gmail.com",
}

const btn = document.getElementById("btn");

btn.addEventListener('click', (e) => {
    clearStorage();
})

saveObject(userData);