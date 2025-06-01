function person(name){
    this.name = name;
}
person.prototype.sayHello = function(){
    console.log("Hi, I'm " + this.name);
};

const p1 = new person('Ani');
p1.sayHello();

// Using class
class person2 {
    constructor(name){
        this.name = name;
    }
    sayHello2(){
        console.log("Hi, I'm " + this.name);
    }
}

const p2 = new person2("Roy");
p2.sayHello2();

