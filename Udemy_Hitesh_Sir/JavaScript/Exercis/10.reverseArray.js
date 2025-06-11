console.log('Reverse an array without using built-in functions');

let myArr = [22, 20, 100, 43, 54, 9, 56];
let start = 0;
let end = myArr.length - 1;

while(start < end){
    let temp = myArr[start];
    myArr[start] = myArr[end];
    myArr[end] = temp;
    start++;
    end--;
}

console.log(myArr);