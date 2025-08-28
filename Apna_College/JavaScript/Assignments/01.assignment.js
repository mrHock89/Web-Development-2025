// Q3.
let quaterNum = prompt("Enter the quater number(1-4): ");

switch (quaterNum) {
    case '1':
        console.log('January, February, March');
        break;
    case '2':
        console.log("April, May, June");
        break;
    case '3':
        console.log("July, August, September");
        break;
    case '4':
        console.log("October, November, December");
        break;
    default:
        console.log("Wrong quater number.");
        break;
}

// Q4. Largest Number
let a = 5;
let b = 6;
let c = 0;
if(a > b && a > c){
    console.log(`${a} is the largest number.`);
} else if( b > a && b > c){
    console.log(`${b} is the largest number.`);
} else {
    console.log(`${c} is the largest number.`);
}

// Q5. Same last digit

let x = 453;
let y = 234;
if(x % 10 === y % 10){
    console.log("Both numbers have same last digit.");
} else console.log("Both numbers have different last digit.");