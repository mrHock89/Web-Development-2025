// let muName = prompt("What is your name? ");
let teaCollection = [];
let tea;
do{
    tea = prompt(`Enter you favorite tea(type "stop" to finish)`);
    if(tea !== 'stop'){
        teaCollection.pop(tea);
    }
}while(tea !== 'stop');
console.log(teaCollection);