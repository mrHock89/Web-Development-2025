console.log("Check a number is prime or not using function.");

function prime(num){
    if(num <=1 ){
        console.log("Not a Prime Number");
        return;
    }
    for(let i = 2; i <= num / 2; i++){
        if(num % i === 0){
            console.log(`${num} is not a prime number`);
            return;
        }
    }
    console.log(`${num} is a prime Number`);
}

let num = 34;
prime(num);