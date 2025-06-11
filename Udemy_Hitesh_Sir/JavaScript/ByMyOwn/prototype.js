function Person(firstName, lastName, roll, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.roll = roll;
    this.age = age;
    this.nationality = "Indian" // will not work

};
Person.prototype.isMarried = true;
Person.prototype.name = function(){
    return this.firstName +
" " + this.lastName;
};

//Now we can create multiple instances of an object with the same properties and methods
const myFather = new Person("Mukun", "Monko", 32, 23, true);
console.log(myFather);
Person.nationality = "Indian" // will not work
console.log(myFather.isMarried); 
console.log(myFather.name()); 

