// Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting = () => {
        console.log(`I am ${this.name} and I am ${this.age} years old.`);
    }

    setName = (name) => {
        this.name = name
    }
}

const p = new Person("Shivam", 23);
p.greeting();

// // regular function
// function greeting(name) {
//     console.log(`Hello ${name}`)
// };

// // named function
// const funcGreeting = function funcGreeting(name) {
//     console.log(`Hello ${name}`)
// };

// //arrow function with block body
// const arrowFunc1 = (name) => {
//     console.log(`Hello ${name}`)
// };

// //arrow function with concise body
// const arrowFunc2 = (name) => console.log(`Hello ${name}`);

// const box = document.getElementById("box");

// console.log(box.children); // HTMLCollection(2) [div, div]
// console.log(box.childNodes); // NodeList(5) [text, div, text, div, text]

// console.log("Write anything in here.");

// console.warn("Warning!!");

// console.error("Error....");

// let person = {
//     "name": "shivam",
//     'age': 23,
//     "job": "SDE"
// }
