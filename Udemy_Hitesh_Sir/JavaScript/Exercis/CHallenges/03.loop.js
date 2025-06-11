let sum = 0;
let i = 1;
do{
    sum = sum + i;
    i++;
}while(i <= 5);
console.log(sum);

// 5
let array1 = [2, 4, 6];
let multipliedNumbers = [];

for(let i = 0; i < array1.length; i++){
    multipliedNumbers.push(array1[i] * 2);
}
console.log(multipliedNumbers);