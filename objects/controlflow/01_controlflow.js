//in JavaScript executions takes place line by line from first to last

//the control flow statments is used to execute the code when a particular condition is satisfied otherwise it will execute the other block of code

//CONDITIONAL STATEMENTS [If Else]

/*+++++++++++++++++++ IF STATEMNT++++++++++++++++++++++++++++++++ */ 
//executes the code when the condition is true
//  if(condition:true){
//     block of statemnts
//  }  ex:

// if(true){
//     console.log("I am true");
// }

const temperature=41
// if(temperature<50){
//     console.log("temperature is less than 50");
// }

// if(temperature=="41"){
//     console.log("temperature is 41")
// }


//this wil not execute as === strictly check the value along with datatype which is a string  "41"
// if(temperature==="41"){
//     console.log("temperature is 41")
// }


/*++++++++++++++++++++ELSE STATEMENT++++++++++++++++++++++++++++++++
else stmt executes when the if statment is false

//if(condition:true){
    ecexute this
} else{execute this}

*/

const name="Pritesh"
// if(name=="Amit"){
//     console.log(`I am ${name}`)
// } 
// else{console.log(`i am Anonymous`)}

//=>i am Anonymous



/************************ELSE IF*******************************
 * mltb,Tum nhi koi or sahi ,koi or nahi koi or sahi
 used to give multiple conditions
*/
const salary=27500
// if(salary>30000){
//     console.log(" salary greater than 30000")
// }
// else if(salary<30000){
//     console.log("salary is less than 30000")
// }
// else{
//     console.log("cannot predict")
// }




//BLOCK SCOPE statements
const num=36
// if(num==36){
//     // var result=num
//     const result=num
//     console.log(result)//coorect way
// }
// console.log(result)//it will execute in case of VAR as it has global scope
//ERROR and  is correct in case of let and const.
