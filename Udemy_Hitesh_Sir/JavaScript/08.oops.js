let car = {
    make: 'toyota',
    model: 'Camry',
    year: 2020,
    start: function(){
        return `${this.make} cat got started in ${this.year}`;
    }
}
console.log(car.start());

function Person(name, age){
    this.name = name;
    this.age = age;
    this.describe = function(){
        return `${this.name} is ${this.age} year old`
    };
}

let John = new Person("John", "23");

// console.log(John.describe());

function Animal(type){
    this.type = type;
}
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`;
}

Array.prototype.manoj = function (){
    return `Custom method ${this}`;
};

let myArray = [1,2,3];
// console.log(myArray.manoj());

// Inheritance

class Vehicle{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    // Method
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

const toyota = new Vehicle('Toyota', 'Carml');

console.log(toyota);
console.log(toyota.make);
console.log(toyota.start());

// Inheritance

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model);
        this.year = year;
    }
    drive(){
        return `${this.make}: This is an inheritance.`;
    }
    built(){
        return `${this.make} is built on ${this.year}`;
    }
}

const hyndai = new Car('Bleze', "fdgljsdl", 2020);
console.log(hyndai);
console.log(hyndai.built());