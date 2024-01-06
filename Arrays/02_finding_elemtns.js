//PRIMITIVES

let array3=[1,3,5,7,2,1,6,8]
console.log(array3.indexOf(5));//2
console.log(array3.indexOf(9));//-1
//"indexof" methods returns the index of the value if its present otherwise returns -1 if not present

//another way to find
console.log(array3.includes(2));
//true means 2 is present

console.log(array3.includes(9));
//false means 2 is not present


//another way, if we want to start searching the value from a particular index
console.log(array3.indexOf(1,2));
//1 is found at index 5 when index searching starts from index 2





//for REFERENCE TYPES
let employee=[
    {name:"rahul",age:21},
    {name:"saorav",age:23},
    {name:"rahul",age:22}
]

const emp1=employee.find(function(emp1){return emp1.age===21 })
//{ name: 'rahul', age: 21 }
//found  age 21


//if want to print index for finding
const emp2=employee.findIndex(function(emp2){return emp2.age==22 })

console.log(emp2);//2 index

//finding using arrow function
console.log(employee.find((employee)=>employee.name==="saorav"));
//{ name: 'saorav', age: 23 }

//if not found =>undefined