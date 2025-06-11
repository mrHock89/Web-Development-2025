console.log("Factorial of a Number");
let fact = 1;
let num = 6;
let numbkp = num;
for(num; num > 0; num--){
    fact = fact * num;
}

console.log(`Factorial of ${numbkp} is ${fact}.`);