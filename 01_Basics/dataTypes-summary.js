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


// Primitive Stack mn jaega aur iske andar hume copy milta hai
// let a = 10
// let b = a
// b= 20
// console.log(a); //10
// console.log(b); //20


// Non-Primitive Heap mn jaega aur yaha reference milta hai i.e Changes will be done in originbal value

let user1 = {
    email : "google.com",
    password : 1416524
}

let user2 = user1

user2.email = "youtube.com"

console.log(user1.email); //youtube.com
console.log(user2.email); //youtube.com
