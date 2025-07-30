// Singleton --> Constructor(Object.create) se banega toh singleton banega else literal se singleton nii banega

//Object literals

//How to initialize a symbol datatype

const mySym = Symbol("key1")

const jsUser = {
    name: "ashwini",
    "full name": "Ashwini kumar",
    // mySym: "mykey1",//Not used as a symbol
    [mySym]: "mykey1",//You have to write like this to use symbol as key
    age: 22, //key is treated as string by default
    location: "haldia",
    email: "ak@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]); //Better practice 
// // console.log(jsUser.full name); Will throw error
// console.log(jsUser["full name"]);
// // console.log(jsUser.mySym); //It is not used as a symbol 
// // console.log(typeof jsUser.mySym); //O/P --> String
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
// console.log(typeof mySym);


jsUser.email = "ashwini@email.com";
// console.log(jsUser['email']);

//To prevent any change in object
// Object.freeze(jsUser);
jsUser.email = "ak@gmail.com"
// console.log(jsUser);

//To add any new key-value pair in the object
// jsUser.contact = 9693843533;
// console.log(jsUser);

//To add a function in a Object

jsUser.greeting = function(){
    console.log("Hello JS User");    
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`);    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

console.log(jsUser);