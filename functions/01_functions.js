//generally A function is used to perform some task by giving arguemnets inside ().

//it is also used to prevent from writing the same logic whenever required continuously,by just caaling the function name with parameters

/*
function VariableName(Parameters){
    task to do
} 

lets havean example
 */
//declaring a function
function minusTwoNumbers(num1,num2){
    //console.log(num1-num2)
    
    // let result=num1-num2
    // return result

    return num1-num2
}

//calling a function
minusTwoNumbers(5,6)//=>-1
minusTwoNumbers()//=>Nan
//if we dont pass arguments to function,it will give output Nan(Not A Number) in case of console log



const result=minusTwoNumbers(9,4)//=> 5
console.log(result);//=>Undefined
//it will not return value when printing variable

//after returning the value in function now output willl be shown 5.


/********************ADDing */
function Sum(a,b){
     console.log(a+b)
}

// Sum(4,5)//   9
// Sum(4,"hi")//  4hi
// Sum(4,true)  // 5



//some other functions implementations

// function greeting(username){
//     if(!username){
//         console.log("Please enter username")
//         return
//     }
//     return `welcome ${username}`
// }

// console.log(greeting());
// //Please enter username
// //undefined

// console.log(greeting("pritesh"));//welcome pritesh



function greeting(username="boorbak"){
   
    return `welcome ${username}`
}

console.log(greeting());
//welcome boorbak

console.log(greeting("pritesh"));//welcome pritesh

