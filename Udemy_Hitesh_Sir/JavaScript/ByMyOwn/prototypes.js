const animal = {
    eats: true,
    walk: function (){
        console.log("Animal walks");
    }
};
const rabbit = Object.create(animal);
rabbit.jumps = true;
console.log(rabbit.eats);
rabbit.walk();
console.log(rabbit.jumps);

// constructor function
function person(name){
    this.name = name
    person.prototype.greed = function(){
        console.log(`Hello, my name is ${this.name}`);
    }
};

const alice = new person("asfk")
alice.greed();