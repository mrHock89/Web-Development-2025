function Drink(name){
    if(!new.target){
        throw new Error('Drink must be called with new keyword');
    }
    this.name = name;
}
let tea = new Drink('tea');
let coffee = new Drink('coffee');