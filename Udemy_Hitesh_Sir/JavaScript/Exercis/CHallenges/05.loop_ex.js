// 1
let myTea = ['Black Tea', 'Green Tea', 'chai', 'Oolong Tea'];

let myTea2 = [];
// for (let i = 0; i < myTea.length; i++) {
//     if(myTea[i] === 'chai'){
//         break;
//     } else{
//         myTea2.push(myTea[i]);
//     }
// }

// console.log(myTea);
// console.log(myTea2);

// 2
for (let i = 0; i < myTea.length; i++) {
    if (myTea[i] === 'chai') {
        continue;
    } else {
        myTea2.push(myTea[i]);
    }
}
// console.log(myTea);
// console.log(myTea2);

// for-of

let myArr = [1, 2, 3, 4, 5];
let myArr2 = [];

// for(let arr of myArr){
//     if(arr === 4){
//         break;
//     }else{
//         myArr2.push(arr);
//     }
// }
// console.log(myArr);
// console.log(myArr2);

for (let arr of myArr) {
    if (arr === 4) {
        continue;
    } else {
        myArr2.push(arr);
    }
}
// console.log(myArr);
// console.log(myArr2);

// for in loop

let citiesPolulation = {
    london: 9425300,
    "New york": 2300000,
    berlin: 8452400,
    paris: 4235200
}
let citiNewPopulations = {};
// console.log(Object.keys(citiesPolulation));
// console.log(Object.values(citiesPolulation));

// for (const city in citiesPolulation) {
//     if (city === 'paris') {
//         break;
//     } else {

//         citiNewPopulations[city] = citiesPolulation[city];
//     }
// }
// console.log(citiNewPopulations);

for(const city in citiesPolulation){
    if(citiesPolulation[city] <= 3000000){
        continue;
    }else{
        citiNewPopulations[city] = citiesPolulation[city];
    }
}
// console.log(citiNewPopulations);

// forEach method

let teas = ['Earl grey', 'Green Tea', 'chai','Oolong Tea'];
let availableTeas = [];

teas.forEach((tea) => {
    // console.log(tea);
    if(tea === 'chai'){
        return;
    }else{
        availableTeas.push(tea);
    }
});
console.log(availableTeas)