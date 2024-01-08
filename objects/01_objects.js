//defining an object
//let object={key-value pairs}

let employee={
    name:"Mahbirwa",
    salary:27500,
    "Employee Id":70796,
    Email:"mahbirwa@gmail.com",


}

//accesing values of object
console.log(employee.salary);
// this will not work if key name is more than single word

console.log(employee);
console.log(employee["Employee Id"]);


//note:A symbol can only be intialized as a key in object in form of [symbolName]

let mySymb=Symbol("Pshivu")
let obj2={
    [mySymb]:"P!shivu",//symbol
    mySymb:"sjs"//normal key
}

console.log(obj2[mySymb]);
console.log(typeof obj2[mySymb]);//string

console.log(typeof obj2.mySymb);//string
console.log(obj2);
