// let num1 = 23;
// let num2 = 23;

// if(num2 == num1){
//     console.log("Both are same number.")
// }else if(num2 > num1){
//     console.log("Num 2 is greater number.")
// }else{
//     console.log("Num 1 is greater number.")
// }

const num = -35;
if(num >= 0 && num < 100){
    if(num >= 90){
        console.log("GRADE:O");
    }else if(num >= 80){
        console.log("GREAD: AA");
    }else if(num >= 70){
        console.log("GREAD: A+")
    }else if(num >= 60){
        console.log("GREAD: A");
    }else if(num >= 45){
        console.log("GREAD: B");
    }else if(num >= 35){
        console.log("GREAD: C");
    }else{
        console.log("TRY AGAIN")
    }
}else {
    console.log("Enter valid number from 0 to 100.");
}