const userEmail = [];
// if(userEmail)
// {
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");  
// }

/*Falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values
"0", "false", " ", [], {}, function(){}
*/

//How to check Array is Empty 
if(userEmail.length === 0){
    console.log("Array is Empty");
}
//How to check Object is Empty 
const empObject = {}
if(Object.keys(empObject).length === 0){
    console.log("object is Empty");
}

//Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //---->10

// val1 = undefined ?? 15 //---->15
val1 = null ?? 10 ?? 15
console.log(val1);

//Ternary Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
;






