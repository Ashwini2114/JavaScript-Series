// Primitive
/*  7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

--->Non-Primitive / Reference

Types --> Array, Objects, Functions


*/

// JS is statically typed or dynamicaly typed ? 


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 63387326821973982n;

const heros = ["Shaktiman", "Doraemon"];


let myObj = {
    name : "ashwini",
    age : 22,
}

const myFunction = function(){
    console.log("hello");
    
}

// console.log(typeof bigNumber);
console.log(typeof myFunction); //function

console.log(typeof heros); //object
console.log(typeof myObj); //object
