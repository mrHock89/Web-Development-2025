// Task 1
const user = {
    "name": "John",
    "surname": "Smith",
};

for(let key in user){
    console.log(user[key]);
}

user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);

// Task 2
let schedule = {name: "Anirban"};
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
console.log(isEmpty(schedule));

// Task 3
let salaries = {
    john: 100,
    ann: 160,
    pete: 130,
}

let sum = 0;
for(let key in salaries){
    sum = sum + (salaries[key]);
}
console.log(sum);

// Task 4

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
}
multiplyNumeric(menu);
console.log(menu)