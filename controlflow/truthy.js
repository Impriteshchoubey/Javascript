//some values are are assumed to be true called truthy values and some are assumed to be false called falsy values

//empty string ""=>false
//empty array []=>true
//empty string with one gap " "=> true
const username=NaN
if(username){
    console.log("it is username")
}else{console.log("not a user name");}

//=>not a username

//some falsy value:
//false, 0 ,-0, Bigint 0n, null, undeifned ,Nan

//truthy values are value rather than falsy values:
//all string values are truth value
//"0","false",array[],{}," ",function(){}




//some interesting facts
// false ==0 =>true
//false=="" =>true
//0=="" =>true






//Nullish Coalescing operator(??):null undefined
//used for specially null or undefined values and passes the another value

let val1
// val1=5??10
// val1= null??15
// val1=undefined??10
// val1= null ?? 10 ??20

console.log(val1);




//ternary operator:used to execute in single line condition
//condition ? true : false

const age=17
age>18 ? console.log("can vote") : console.log("under age");
//under age