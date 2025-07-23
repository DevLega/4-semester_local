let name = prompt("What is your name?");
let age = prompt("What is your age?");

const userData = {
    name: name,
    age: age,
}

const jsonString = JSON.stringify(userData);
const objectString = JSON.parse(jsonString);

console.log(userData);
console.log(jsonString);
console.log(objectString);