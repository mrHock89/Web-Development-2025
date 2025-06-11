// Learning Js Object
// const person = {};
const person = new Object();
// console.log(person); // will peint empty object
person.firstName = "John";
person.lastName = "Adam";
person["School Name"] = "Bagula High School";
person.age = 23;

// console.log(person); //will print an object

// Object constructor function

function person2(firstName, lastName, schoolName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.schoolName = schoolName;
    this.age = age;
}

const myFather = new person2('Anirban', 'Roy', 'Bagula High School', 23);
const myMother = new person2('Lands', 'Ndss', 'High School', 54);
// console.log(myFather);
// myFather.isDrive = true;
// console.log(myFather);
// console.log(myMother);
// console.log(Object.entries(myFather));
// const mySelf = {};
// Object.create(mySelf);
// console.log(mySelf);
// console.log(Object.keys(myFather));

// Object Protection Methods
const car = { type: 'Fiat', model: '500', color: 'White' };
Object.preventExtensions(car);
car.isAvailable = true; // This will be ignore
Object.seal(car);
console.log(car);
delete car.color;
console.log(car);
Object.freeze(car);