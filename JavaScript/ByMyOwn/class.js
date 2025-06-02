// // let car = {
// //     make: "Tyota",
// //     model: "Camry",
// //     year: 2020,
// //     start: function(){
// //         return `${this.model} is makde on ${this.year}`;
// //     }
// // }
// // console.log(car.start());


// function Person(name, age){
//     this.name = name,
//     this.age = age
// }

// let person1 = new Person("Anirban", 25)
// console.log(person1)

// function Animal(type){
//     this.type = type;
// }
// Animal.prototype.speak = function(){
//     return `${this.type} makes a sound`;
// }
// Array.prototype.HelloWorld = function(){
//     return `Hello World!`;
// }

// let cat = new Animal('Cat');
// console.log(cat);
// console.log(cat.speak());

// let myArr = [1, 2, 3];
// console.log(myArr.HelloWorld())


// Using class

// class Person{
//     constructor (name){
//         this.name = name;
//     }
//     discription(){
//         return `Hello, ${this.name}`;
//     }
// }
// class Address extends Person {
//     constructor (name, adr){
//         super(name)
//         this.adr = adr;
//     }
//     address(){
//         return `${this.name} is ${this.adr}`;
//     }
// }
// // class College {
// //     constructor(clName, roll){
// //         this.clName = clName;
// //         this.roll = roll;
// //     }
    
// // }
// class College extends Person {
//     constructor(name, clName, roll){
//         super(name);
//         this.clName = clName;
//         this.roll = roll;
//     }
//     clgInfo(){
//         return `Name: ${this.name}, College Name: ${this.clName} and Roll: ${this.roll}`;
//     }
// }

// let person1 = new Address("Anirban", "Kolkata");
// let college1 = new College("Anirban", "Brainware University", 23);
// // console.log(person1);
// // console.log(person1.discription());
// // console.log(person1.address());
// console.log(college1.clgInfo());

// Using Function
function Person(name){
    this.name = name;
}
Person.prototype.description = function(){
    return `Hello, ${this.name}`;
}

function Address(name, adr){
    Person.call(this.name);
    this.adr = adr;
}
Address.prototype = Object.create(Person.prototype);
Address.prototype.constructor = Address;
Address,prototype.address = function(){
    return `${this.name }is from ${this.adr}}`;
}