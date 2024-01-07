let list=[2,4,-6,4]


//every()=>It check for all the values in the array satisfies the condition



//some()=>it check if atleast one value satisfies the particular conditon



//programme to check whether values of array are positive


//***************************EVERY()************* */
const Allpositive=list.every((value)=> (value >=0))
console.log(Allpositive);
//false

//can use any method above or below

const every_positive=list.every(function(value){
    return value>=0
})
console.log(every_positive);
   //false 


/***********************SOME()************************* */
const At_least_one_positive=list.some((value)=> (value >=0))
console.log(At_least_one_positive);
//True

//can use any method above or below

const only_1_positve=list.some(function(value){
    return value>=0
})
console.log(only_1_positve);
   //True




//to check all array items are divisible by two?
const divibleBy2=list.every((item)=> item%2==0)
console.log(divibleBy2);
//true

