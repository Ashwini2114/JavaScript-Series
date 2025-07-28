const name = "ashwini"
const repoCount = 4

console.log(name + repoCount + " value");
//String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

console.log(typeof name); //String
console.log(name[0]);



const gameName = new String("ashwini");
console.log(typeof gameName); //Object

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); //-1
console.log(gameName.indexOf('h')); //2

const newString = gameName.substring(0,4); //Don't take negative values
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const str = new String('     ashwini-kumar'    );
console.log(str);
console.log(str.trim());
console.log(str.trimStart());


const url = "https://ashwini.com/ashwini%20kumar"
console.log(url.replace('%20', '_'));

console.log(url.includes('ashwini')) //true

const str2 = "ashwini kumar gupta";
console.log(str2.split(' '));







