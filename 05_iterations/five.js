//for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]
//callback function ka naam ni hota hai
// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item); 
// })

// function printMe(item){
//     console.log(item);  
// }

// coding.forEach(primtMe) //As a parameter Yaha pe function ka reference bhi pass kar sakte hai
//Function ko as a paramter hi pass krna hai yaha pe execute ni krna hai


//This function also have other parameters like index and also the complete array list
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr); 
})


const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]


myCoding.forEach( (item) => {
    // console.log(item.languageName);
})

myCoding.forEach( (item) => {
    for (const key in item) {
        // console.log(key,"and its filename is", item[key]);   
    } 
    // console.log("\n");
})



