const btn = document.getElementById("btn");
const span = document.getElementById("span");
const input = document.getElementById("input")
let number = Math.floor(Math.random() * 10) + 1; 

function startGame() {
    let timer = 10;

    setInterval(() => {
        if(timer > 0) {
            span.textContent = timer
            timer -= 1
        } else {
            clearInterval(this);
            endGame();
        }
    }, 1000)
}

function endGame() {
    let result;

    if(input.value != number) {
        result = "Не правильно, правильна відповідь: " + number;  
    } else {
        result = "Правильно, ти вгадав!"
    }

    span.textContent = result;
    btn.disabled = true;
    input.disabled = true;
}

btn.addEventListener('click', () => {
    startGame();
})