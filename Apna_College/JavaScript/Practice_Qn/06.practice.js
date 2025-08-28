const popSize = prompt ("Enter the popcorn size: XL | L | M | S");
if(popSize === "XL"){
    console.log('The price is Rs.250.');
} else if(popSize === 'L'){
    console.log('The price is Rs.200.');
} else if(popSize === 'M'){
    console.log('The price is Rs.100.');
} else if(popSize === 'S'){
    console.log('The price is Rs.50');
} else {
    console.log('Wrong Size.')
}