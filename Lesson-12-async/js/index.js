const span = document.getElementById("timer");
let timer = 100;

function updateSpan() {
    span.textContent = timer;
}

setInterval(() => {
    if(timer <= 0) {
        stopInterval();
    };

    timer --;
    updateSpan()
}, 100)