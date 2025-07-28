const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString.length);
console.log(balance.toFixed(2)); //2 places after decimal

const num = 138.8976
console.log(num.toPrecision(3)); 139// //Round-off the value upto n place (Starting se n number ko)

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //According to US standard
console.log(hundreds.toLocaleString('en-IN')); //According to Indian Standard


//There are some methods that we can use with numbers
console.log(Number.isFinite(score)); //true


//=====================MATHS=================================//
//Math is a library in JavaScript
console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(5.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.8));
// console.log(Math.min(8,7));
// console.log(Math.max(782,23));



console.log(Math.random());
console.log((Math.random()*10) + 1); //Always give number between 1 and 9 //+1 is done to avoid 0
console.log(Math.floor(Math.random()*10) + 1); //Always give number between 1 and 9 single digit

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);










