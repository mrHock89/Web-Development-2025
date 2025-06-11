function person(name, age, roll){
    this.name = name;
    this.age = age;
    this.roll = roll;
}

person.prototype.isMarried = true;

const person1 = new person("Anirban", 25, 4543);
const person2 = new person("Manoj", 22, 3490);
console.log(person1)
console.log(person1.isMarried)
console.log(person2)

let a = {}
let b = {}

console.log(a === b);