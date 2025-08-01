

let a = 300 //Global Scope

if (true){   
    let a = 10 //Block Scope
    const b = 20
    c = 30
}
//Globally declared variables can be used inside the block scope but you can't use the block variables declared outside that block
// console.log(a);
// console.log(b);
// console.log(c);

function one()
{
    const username = "ashwini"
    function two()
    {
        const website = "youtube"
        console.log(username); 
    }
    // console.log(webiste);
    two()
}
// one()


if(true){
    const username = "ashwini"
    if(username === "ashwini")
    {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++Interesting++++++++++++++++//

console.log(addOne(5));
//If we declare function like this you can use it before it's definition
function addOne(num)
{
    return num + 1;
}

// addTwo(5) //You can't call a function before when you declare a fucntion as a variable
const addTwo = function(num){
    return num + 2;
}
addTwo(5) 
console.log(addTwo(5));
