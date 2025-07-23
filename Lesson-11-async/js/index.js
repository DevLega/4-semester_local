// function printNumbers(from, to) {
//     for(let i = from; i < to; i++) {
//         setTimeout(() => {
//             console.log(from + i)
//         }, 1000)
//     }
// }
//
// printNumbers(10, 20)

const bg = ['red', 'blue', 'green', 'purple', 'lightgreen', 'lightblue', 'tomato', 'darkgreen', 'darkblue']
const body = document.querySelector("body");

function changeBackground() {
    for(let i = 0; i < bg.length; i++) {
        setTimeout(() => {
            body.style.backgroundColor = bg[i];
        }, i * 1000);
    }
}

changeBackground()

console.log()