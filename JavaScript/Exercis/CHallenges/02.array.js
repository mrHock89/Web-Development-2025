// let teaFlavors = ["green tea", "lemon tea", "red tea"];
// const firstTea = teaFlavors[0]
// console.log(firstTea)


// let citiesVisited = ['Mumbai', 'Sydney'];
// citiesVisited.push('Berlin');
// console.log(citiesVisited);
// console.log(citiesVisited.pop());

// let popularTeas = ["green tea", "oolong tea", "chai"];
// let softCopyTeas = popularTeas;
// popularTeas.pop();
// console.log(popularTeas);
// console.log(softCopyTeas);
let topCities = ["Berlin", "Singapore", "New Work"];
// let hardCopyCties = [...topCities];
let hardCopyCties = topCities.slice();
topCities.pop();
console.log(hardCopyCties);

// Concatination of arrays
let europeanCities = ['Paris', 'Rome'];
let asianCities = ['Tokyo', 'Bangkok'];
console.log(europeanCities.concat(asianCities));
console.log(europeanCities);
console.log(asianCities);


let teaMenu = ['Masala Tea', 'Oolong Tea', 'Greeb Tea', 'Earl grey'];
let arryLength = teaMenu.length;
console.log(arryLength);

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes('London');
console.log(isLondonInList);
