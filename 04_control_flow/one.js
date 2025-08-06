//if 

// const isUserLoggedIn = true
// const temperature = 41
// if(temperature < 50)
// {
//     console.log("Garmiii hai re baba !"); 
// } else {
//     console.log("Pighal gya !");
// }
//Conditional Operators ---> <, >, <=, >=, ==, !=, ===(Strict Equal), !==(Strict Not Equal)

//Scope 
// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);  
// }
// console.log(`User Power: ${power}`);  //Error -->Power is not defined


const balance = 1000;
//Not a good practice 
// if(balance > 500) console.log("Test"), console.log("Test2");

// if(balance < 500)
// {
//     console.log("Less Than 500");
// } else if(balance < 750){
//     console.log("Less Than 750");
// } else if(balance < 900){
//     console.log("Less Than 900");
// } else{
//     console.log("Less than 1200");  
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInWithGoogle = false
const loggedInWithEmail = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInWithEmail || loggedInWithGoogle) {
    console.log("User Logged In");
}




