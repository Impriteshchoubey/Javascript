//use of This in Funtions and objects.

let employee={
    name:"Bahadoor",
    salary:9000,
    greet: function(){
        console.log(`good morning Mr. ${this.name}`)
        // console.log(this);//will print the current values/context of the object
    }
}

// employee.greet()//good morning Mr. Bahadoor
// employee.name="Alex"
// employee.greet()//good morning Mr. Alex


//console.log(this);//{} empty OBJECT output,in Stand Alone engines like Node,dino,bun etc.

//whereas in browser, THIS output willl be , a window object 

//in Browsers, sabse zaada jo GLOBAL object hai wo hai WINDOW OBJECT



function Add(){
    console.log(this);
}

//Add()
//this will return a GLOBAL object ,some microtasks, Performance evaluations fetch methods etc.



// let fun=function(){
//     name1:"gadhaa"
//     console.log(this.name1);
// }

// fun()  //Undefiend




// let fun=()=>{
//     name1:"gadhaa"
//     console.log(this.name1);
// }

// fun()  //Undefiend



//////////////////////////////////////////////////////
//Explicit method
// const addTwo=(num1,num2)=>{
//     return num1+num2 }


//Implicit method
// const addTwo=(num1,num2)=> (num1+num2) 
// console.log(addTwo(6,7));//13


//always use () inside {} for an object

//const addTwo=(num1,num2)=> {age:39}   //UNDEIFNED

const addTwo=(num1,num2)=> ({age:39} )  //UNDEFiNED
console.log(addTwo(4,5)); 

