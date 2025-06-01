let computer = {cpu: 12, ram: 14};
let lenovo = {
    screen: "HD",
    __proto__: computer,
};
let tomHardware = {};
console.log(computer);
console.log(`lenovo`, lenovo.__proto__);
console.log(lenovo.ram);

let genericCar = {tyres: 4}
let tesla = {
    driver: "AI"
}
Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`, genericCar);
console.log(`tesla`, Object.getPrototypeOf(tesla));