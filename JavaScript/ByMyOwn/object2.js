// const prompt = require('prompt-sync')();
// const groceryList = [];

// while (true) {
//   console.log("\n🛒 Grocery List Manager");
//   console.log("1. Add Item");
//   console.log("2. View Items");
//   console.log("3. Remove Item");
//   console.log("4. Exit");

//   const choice = prompt("Choose an option (1-4): ");

//   switch (choice) {
//     case "1":
//       const item = prompt("Enter item to add: ");
//       groceryList.push(item);
//       console.log(`✅ "${item}" added to the list.`);
//       break;

//     case "2":
//       console.log("\n📋 Your Grocery List:");
//       if (groceryList.length === 0) {
//         console.log("List is empty.");
//       } else {
//         groceryList.forEach((item, index) => {
//           console.log(`${index + 1}. ${item}`);
//         });
//       }
//       break;

//     case "3":
//       const removeIndex = parseInt(prompt("Enter item number to remove: ")) - 1;
//       if (removeIndex >= 0 && removeIndex < groceryList.length) {
//         const removed = groceryList.splice(removeIndex, 1);
//         console.log(`❌ Removed "${removed[0]}" from the list.`);
//       } else {
//         console.log("⚠️ Invalid item number.");
//       }
//       break;

//     case "4":
//       console.log("👋 Exiting... Goodbye!");
//       process.exit();

//     default:
//       console.log("⚠️ Please choose a valid option (1-4).");
//   }
// }













// function makeUser(name, age){
//   // return{
//   //   name: name,
//   //   age: age,
//   // }
//   this.name = name,
//   this.age = age
// }
// let user = new makeUser("John", 30);
// console.log(user.name);

// let obj = {};
// obj.__proto__ = 5; // assign a number
// console.log(obj.__proto__);

let usr = {
  name: "Ani",
  age: 25,
}
// console.log("age" in usr);
// for(let key in usr){
//   console.log(key);
//   console.log(usr[key]);
// }

let codes = {
  "Ger": "Germany",
  "Sw": "Switzerland",
  "GB": "Great Britain",
  // ..,
  "Us": "USA"
};
for(let key in codes){
  console.log(codes[key]);
}
