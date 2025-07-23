const somePromise = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(text))
    }, delay)
}

const firstPromise = somePromise('firstPromise', 2000)
const secondPromise = somePromise('secondPromise', 10000)

Promise.all([firstPromise, secondPromise])