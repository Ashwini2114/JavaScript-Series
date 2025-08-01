function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("W");
    console.log("I");
    console.log("N");
    console.log("I");  
}

//sayMyName --> Reference of function
// sayMyName() //Execution of function

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);  
// }


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result  
    return number1 + number2
    
}

// addTwoNumbers(3, 7)
const result = addTwoNumbers(3, 4)
// console.log("Result: " ,result);


function loginUserMessage(username = "User" /*Default Value*/){
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ashwini"));
// console.log(loginUserMessage()); //o/p --> undefined just logged in

// function calculateCartPrice(...num1){ //...num1 operator store the rest elements in an array Here, ... is called rest operator
//     return num1
// }
// console.log(calculateCartPrice(7, 5, 6)); //[ 7, 5, 6 ]


function calculateCartPrice(val1, val2, ...num1){ //...num1 operator store the rest elements in an array Here, ... is called rest operator
    return num1
}


// console.log(calculateCartPrice(7, 5, 6)); //[ 6 ] because val1 takes 7 and val2 takes 6

const user = {
    username: "Ashwini",
    price: 99
}

function handleObject(anyObjects){
    console.log(`Username is ${anyObjects.username} and price is ${anyObjects.price}`);  
}

handleObject(user)
handleObject({ //We can also pass the Object directly
    username: "Ashish",
    price: 787
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3, 4, 5]));
