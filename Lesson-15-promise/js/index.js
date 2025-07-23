const btn = document.querySelector("#btn")

function getData(url) {
    fetch(url).then((value) => value.json()).then((value) => console.log(value))
}

btn.addEventListener('click', () => {
    getData("https://jsonplaceholder.typicode.com/users")
})