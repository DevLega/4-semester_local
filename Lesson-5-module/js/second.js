export default function findAvarage(arr) {
    let sum = 0

    for(let num of arr) {
        sum += num
    }

    return sum / arr.length;
}

