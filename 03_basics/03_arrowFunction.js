const user = {
    username: "ashwini",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);
        
    }
}
//this keyword refers current context
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); //O/P ---> {}Empty Object
//In node environment node refers to Empty Object
//In browser it it refers window object


// function chai()
// {
//     let username = "ashwini"
//     console.log(this.username);  //o/p --> undefined
//     // We are unable to use this keyword inside a function
// }
// chai()


//SAME OUTPUT AS ABOVE
// const chai = function(){
//     let username = "ashwini"
//     console.log(this.username);    
// }


const chai = () => {
    let username = "ashwini"
    console.log(this.username);    
}

// chai() //o/p --> UNDEFINED

//ARROW FUNCTION
//1.Basic syntax
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//2.Implicit Return
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => (num1 + num2); //Jab paranthesis ke andar likhenge toh return ni likhna padega but { } iske andar likhenge to return likhna padega
console.log(addTwo(3, 4));


const obj = () => ({username: "Ashwini"})
console.log(obj());

