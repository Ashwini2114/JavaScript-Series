//IIFE --> Immidiately Invoked Function Expressions
//It is used for Immidiate Invoke and prevent from global pollution i.e, global variable don't cause problem in function call

(function chai(){
    //Named IIFE
    console.log(`DB CONNECTED`);
})(); //IIFE don't know where to end

(() => {
    //Unnmaed IIFE
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    //Unnmaed IIFE
    console.log(`Welcome ${name} !`);
})("Ashwini")


