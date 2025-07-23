const input = document.getElementById('input')
const btn = document.getElementById('btn')
const box = document.getElementById('box')

function getUserData() {
    const inputValue = input.value
    if (!inputValue) return;
    const url = `https://api.github.com/users/${inputValue}`

    fetch(url)
        .then(response => response.json())
        .then(render)
}

function render(data) {
    const avatarUrl = data.avatar_url
    const username = data.login
    const repos = data.public_repos

    box.innerHTML = `
        <div class="user">
            <img src="${avatarUrl}" alt="Avatar" class="avatar">
            <span class="username">${username}</span>
            <p class="username">${repos}</p>
        </div>
    `
}

btn.addEventListener('click', () => {
    getUserData()
})
