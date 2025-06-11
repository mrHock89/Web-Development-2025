// && -> And
// || -> Or
// ! -> reverse

// let isLoggedIn = true;
// let isPaid = false;
// console.log(isLoggedIn && isPaid);
// console.log(isLoggedIn || isPaid);

let str = "Hello";
let num = 10;
let bigInt = 1234567890123456789012345678901234567890n;
let bool = true;
let undef;
let nul = null;
let sym = Symbol("mySymbol");

console.log(typeof str); // "string"
console.log(typeof num); // "number"
console.log(typeof bigInt); // "bigint"
console.log(typeof bool); // "boolean"
console.log(typeof undef); // "undefined"
console.log(typeof nul); // "object" (historical quirk, should be "null")
console.log(typeof sym); // "symbol"