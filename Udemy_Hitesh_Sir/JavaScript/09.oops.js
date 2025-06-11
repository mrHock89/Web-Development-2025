// Encapsulation
class BankAccount{
    #balance = 0;
    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let amount = new BankAccount();
// console.log(amount.getBalance());

// Abstraction

class coffeMaker{
    start(){
        return `Start the machine`;
    }

    brew(){
        return `Brew coffee`;
    }
    pressBtn(){
        let start = this.start();
        let brew = this.brew();
        return `${start} and ${brew}`;
    }
}

const myCoffee = new coffeMaker();
// console.log(myCoffee.start());
// console.log(myCoffee.pressBtn());

// Polymorphism
class Bird{
    fly(){
        return `Flying ...`
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguins can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

// Static method
class Calculator{
    static add(a,b){
        return a+b;
    }
}

let miniCalc = new Calculator();
// console.log(miniCalc.add(2,4)); // not able to acces add() method beecause of static

console.log(Calculator.add(2,3));

// Getters and Setters
class Employee {
    #salary;
    constructor(name, salary){
        if(salary < 0){
            throw new Error('Salary cannot be negative.')
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        // return this._salary;
        return `You are not allowed to see the salary`;
    }
    set salary(value){
        if(value < 0){
            console.error("invalid number");
        }else{
            this._salary = value;
        }
    }
}

let emp = new Employee('Elison', 84395);
console.log(emp.salary);
// emp.salary = 60000