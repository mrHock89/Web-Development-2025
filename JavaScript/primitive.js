let balance = 120;
console.log(balance);
let anotherBalance = new Number(120);
console.log(anotherBalance);
console.log(anotherBalance.valueOf());
console.log(typeof anotherBalance);

// undefined
let name;
console.log(name);
// console.log(name2);

// String
let firstName = "Manoj";
let lastName = "Mondal";
console.log(`My FirstName is ${firstName} and my lastName is ${lastName}`);

// Symbol
let sm1 = Symbol("Mnj")
let sm2 = Symbol("Mnj")
console.log(sm1 == sm2);