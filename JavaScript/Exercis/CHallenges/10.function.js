// function makeTea(typeOfTea){
//     return `makeTea: ${typeOfTea}`;
// }

// function processTeaOrder(teaFuntion){
//     return teaFuntion('earl tea');
// }
// let order = processTeaOrder(makeTea);
// // console.log(order);

// 5


function createTeaMaker(name){
    return function(teaType){
        return `Making ${teaType} ${name}`;
    }
}
let teaMaker = createTeaMaker('Manoj');
console.log(teaMaker('Green Tea'));