// Simple Calculator
let num1 = 23;
let num2 = 25;
let n = 4;

console.log("Enter Two Numbers: ")
console.log("Enter 1 for Addition");
console.log("Enter 2 for Substraction");
console.log("Enter 3 for division");
console.log("Enter 4 for Multiplication");
console.log("Enter 5 for Exponential")
console.log("Enter 6 for finding modulo")

switch(n){
    case 1: console.log(num1 + num2);
    break;
    case 2: console.log(num1 - num2);
    break;
    case 3: console.log(num1 / num2);
    break;
    case 4: console.log(num1 * num2);
    break;
    case 5: console.log(num1 ** num2);
    break;
    case 6: console.log(num1 % num2);
    break;
    default: console.log("Invalid typing.");
    break;
}