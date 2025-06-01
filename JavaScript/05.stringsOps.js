// Decleartions
let str1 = "Manoj";
let str2 = "Mondal"
let str3 = `Welcome, ${str1} ${str2}`;
console.log(str3);
console.log(str3.length)
// Character access
console.log("Getting all letters from my name: ")
for(let i = 0; i < str1.length; i++){
    console.log(str1[i]);
}

// Changing cases
console.log(`My name to upperCase is ${str1.toUpperCase()}`);

// Object
let myObje = new Object;
myObje = {
    Name: "Manoj Mondal",
    Roll: 23,
    "Phn No": "+91 6294569210"
}

console.log(`My name is ${myObje.Name}`);
console.log(`My Roll No. is ${myObje['Roll']}`);

// Substrim=ngs
console.log(str1.slice(0,2));
console.log(str1.substring(0,2));
console.log(str1);

// Searching
let message = "Learn JavaScript today";
console.log(message.indexOf("Java"));
console.log(message.includes("Script"));