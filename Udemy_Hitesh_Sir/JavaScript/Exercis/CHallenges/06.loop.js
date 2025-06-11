let myArr =['Berlin', 'Tokyo', 'Sydney', 'Paris'];
let availableTeas = [];

myArr.forEach(tea =>{
    if(tea === 'Sydney'){
        return;
    }else{
        availableTeas.push(tea);
    }
}
)
console.log(availableTeas)