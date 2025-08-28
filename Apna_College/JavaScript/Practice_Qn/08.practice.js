// if(!NaN){
//     console.log('The value is true.');
// }else {
//     console.log('The value is not true.')
// }

let day = Number(prompt('Enter the day numbers(1 to 7): ')); // to conver the string to number explicetly
console.log(typeof day);

// using switch statement
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong Number");
    }   
4