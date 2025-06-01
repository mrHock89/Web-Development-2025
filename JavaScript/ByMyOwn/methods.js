const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};
// console.log(person1);
// Assign Source to Target
Object.assign(person1, person2);
// console.log(person1);
// console.log(person2);
// console.log(Object.entries(person1));

// for of loop using Object.entries
let text = "";
for(let [a, b] of Object.entries(person1)){
    text += a + ": " + b + " | ";
}
// console.log(text);

// Maps
const fruits = {
    Bananas: 300,
    Oranges:200,
    Apples: 500
}
const myMap = new Map(Object.entries(fruits));
console.log(myMap);

// Create Objects using Object.fromEntries()

const fruits2 = [
    ["apples", 300],
    ["bananas", 200],
    ["oranges", 400]
]
const myObj = Object.fromEntries(fruits2);
// console.log(typeof fruits2)
// console.log(typeof myObj);
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Get all Properties
console.log(Object.getOwnPropertyNames(person))