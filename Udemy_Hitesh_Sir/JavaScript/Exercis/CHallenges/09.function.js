function makeTea(tyoeOfTea){
    return (`Making ${tyoeOfTea}`);
}

let teaOrder = makeTea('green tea');
// console.log(teaOrder);

// 2 
function orderTea(teaType){
    function confirmed(tea){
        return `Order confirmed for chai for ${tea}`
    }
    return confirmed(teaType);
}

// console.log(orderTea('Black Tea'));

// 3
// let calculateTotal = (price, quantity) =>{
//     let totalCost;
//     totalCost = price * quantity;
//     return totalCost;
// }

// or
let calculateTotal = (price, quantity) => price * quantity;
console.log(`Total Cost is ${calculateTotal(5, 5)}`);