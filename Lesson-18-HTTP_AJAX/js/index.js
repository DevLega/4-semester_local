const gallery = document.getElementById('gallery')
const btn = document.getElementById('load')
const url = 'https://pixabay.com/api/?key=51231125-b28d57524b499c5bb4eac00c0&q=forest+lake&per_page=9'

function request(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.hits.forEach((img) => {
                renderData(img)
            })
        })
}

function renderData(data) {
    const listItem = document.createElement('li')
    listItem.innerHTML = `<img src="${data.largeImageURL}">`
    gallery.appendChild(listItem)
}

btn.addEventListener('click', () => {
    request(url)
})
