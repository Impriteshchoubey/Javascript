//Objects IN JavaSript

// declaring an object
// let objectVariable={Key-value pairs}

//by default Keys are considered in String form.


//creating a symbol to use as a key in object below inside [symbol Variable]
let sym=Symbol("Sanatan")
let Employee={
    name:"Pritesh ",
    "full name":"P K CHATURVEDI",
    Id:70769,
    email:"pritesh@gmail.com",
    Diables:false,
    contact:125534554,
    sym:"Hindu", //string type 
    [sym]:"Sanatan Hindu"  //symbol type
}


//accesing the object
console.log(Employee);

//accesing value using key
// console.log(Employee.name); 
// console.log(Employee.contact);
// console.log(Employee.sym);
// //in some cases we acces using obj[]
// console.log(Employee["full name"]);
// console.log(Employee[sym]);//sanatan hindu

//we can freeze the object so that values will not chnage on modifications
// Object.freeze(Employee)
// Employee.Diables=true
// console.log(Employee.Diables);//false


//creating a functions as a key in object
Employee.greetings= function(){
    console.log("Hello Namste!");
}

console.log(Employee.greetings());
//hello namaste!


console.log(Employee.greet);//undefine notexecute


//Using "This" method to refer to all the keys of the object

Employee.greet2=function(){
    console.log(this.email);
}

console.log(Employee.greet2());
//Pritesh@gmail.com


//another example
Employee.greet3=function(){
    console.log(`hi i am ${this["full name"]} and my religion is ${this.sym} `);
}

console.log(Employee.greet3());
//hi i am P K CHATURVEDI and my religion is Hindu 


console.log(Employee);
/*
{
  name: 'Pritesh ',
  'full name': 'P K CHATURVEDI',
  Id: 70769,
  email: 'pritesh@gmail.com',
  Diables: false,
  contact: 125534554,
  sym: 'Hindu',
  greetings: [Function (anonymous)],
  greet2: [Function (anonymous)],
  greet3: [Function (anonymous)],
  [Symbol(Sanatan)]: 'Sanatan Hindu'
} */







