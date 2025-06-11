console.log("Find Largest element in an Array");

let myArr = [22, 20, 100, 43, 54, 9, 56];

let largest = -1;

for(let i = 0; i <= myArr.length; i++){
    if(largest < myArr[i]){
        largest = myArr[i];
    }
}

console.log(largest);