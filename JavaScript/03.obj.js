let obj = { 
    "firstName": "Anirban", 
    "Email": "manojdsjfnkas343@gmail.com",
    isLoggedIn: true,
    "Father's Name": "Mukul Mobdal"
};

// Adding key-value to an object
console.log(obj.Email);
console.log(obj.firstName);
console.log(obj.isLoggedIn);
console.log(typeof obj);

console.log(obj);
obj.lastName = "Mondal"
console.log(obj.lastName);
// Other way to acces an element of the obj
console.log(obj);
console.log(obj["Father's Name"]);

