// Q1.
// String check
const myString = prompt("Enter a String: ");
let firstLetter = myString[0];
let myStringLength = myString.length;
if((firstLetter === 'a') && (myStringLength > 3)){
    console.log(`${myString} is a good string.`);
} else console.log(`${myString} is a bad string.`);

// Q2. 
let num = 12;
if((num % 3 === 0) && ((num + 1 == 15) || (num -1 == 11))){
    console.log('safe');
}else{
    console.log("unsafe");
}