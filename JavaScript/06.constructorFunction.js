// function greet(){
//     console.log("Hello");
// }
// greet();

function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);
// console.log(typeof myCar);

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`;
    };
}

let leamonTea = new Tea('Leamon Tea');
// console.log(leamonTea);
// console.log(leamonTea.describe());

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}
let dog = new Animal('Dog');
// console.log(dog);
// console.log(dog.sound());
// console.log(dog.species);