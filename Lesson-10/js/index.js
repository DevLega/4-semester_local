const input = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('button')
const list = document.getElementById('taskList')
const tasks = JSON.parse(localStorage.getItem("arrayTask")) || [];

function renderTask() {

}

function addTask(textTask) {
    const item = document.createElement('li')
    item.textContent = textTask

    const btn = document.createElement('button')
    btn.textContent = "Delete"

    item.append(btn)
    list.append(item)

    input.value = '';
    tasks.push(textTask)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function deleteTask(event) {
    if(event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove()
    }
}

addTaskBtn.addEventListener('click', () => {
    const textTask = input.value;
    addTask(textTask)
})

list.addEventListener('click', deleteTask)