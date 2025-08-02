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


//============NOTES==============//
/*
1. JavaScript is a single threaded
2. Global Execution Context
   Function Execution Context
   Eval Execution Context--> Property of a global object

JS code execute in two phases----
1>Memory (Creation) Phase--->
2>Execution Phase


Steps When we run Js code---
1. Global Execution ---> allocated in this
2. Memory Phase --->
    val1 -> undefined
    val2 -> undefined
    addNum -> definition
    result1 -> undefined
    result2 -> undefined

3. Executin Phase--->
    val1 <- 10
    val2 <- 5
    addNum -> For every function call a New Execution Environment is created--->(New Variable Environment + Execution Thread) --> For every function call a new execution environment is created
        1. Memory Phase --->
            val1 -> undefined
            val2 -> undefined
            total -> undefined
        2. Execution Phase
            val1 <- 10
            val2 <- 5
            total <- 15
            return total
        The returned value in a function is returned to the global execution context
        After completing this call  the New Execution Environment is deleted


*/
