//IMMEADIATELY INVOKED FUNCTION EXPRESSIONS
//used to execute functions immeadiately without calling it seperately
//syntax:- (function expression)(calling argurments)



//Named IIFE(divide)
(function divide(num1,num2){
    console.log(num1/num2)
})(12,6);
//=>output: 2

//use ; after each IIFE stmt to use multiple iife excecutions otherwise eroors occur

// simple IIFE
(name=>console.log(name))("bahadoor");
//=>Bahadoor

(()=>(console.log("Good Evening ")))()