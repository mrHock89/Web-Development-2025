let myArr = [2, 5, 7, 9];
let multipliedArr = [];

// for(const num of myArr){
//     if(num === 7){
//         continue;
//     } else{
//         multipliedArr.push(num * 2);
//     }
// }
for(let i = 0; i < myArr.length; i++){
    if(myArr[i] === 7){
        continue;
    } else{
        multipliedArr.push(myArr[i] * 2);
    }
}
console.log(multipliedArr);