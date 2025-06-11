let myChai = ['chai', 'green tea', 'black tea', 'jasmine tea', 'herbal tea'];
let shortChais = [];
for(const tea of myChai){
    if(tea.length > 10){
        break;
    }else{
        shortChais.push(tea);
    }
}
console.log(shortChais);