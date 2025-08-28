let color = prompt("Enter the traffic light color: (Red | Yellow | Green)") 
console.log(color);

// trfLtColor = Traffic Light Color
let trfLtColor = color;
if(trfLtColor === 'Red'){
    console.log("Stop!, The light color is Red");
}else if(trfLtColor === 'Yellow'){
    console.log('Slow!, The light color is Yellow');
}else if(trfLtColor === 'Green'){
    console.log('Go!, The color is Green');
}else{
    console.log('Wrong Color');
}