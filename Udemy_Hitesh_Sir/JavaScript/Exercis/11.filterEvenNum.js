console.log('Filter out even numbers from an array.');

let myArr = [22, 20, 100, 43, 54, 9, 56];
let evenNum = [];
let evenNum2 = [];

for(let i = 0; i < myArr.length; i++){
    if(myArr[i] % 2 == 0){
        evenNum.push(myArr[i]);
    }
}

evenNum2 = myArr.filter(num => num % 2 === 0);

console.log(evenNum);
console.log(evenNum2);