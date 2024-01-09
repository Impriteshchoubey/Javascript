//singleton object:When we define object with constructor
//let obj= new Object()

//Non-singleton object:When we define object using string literals directly with {}
// let obj= {}
// console.log(obj);

/**********OBJECT INSIDE OBJECT****** */

let obj1={
    age:19,
    Name:{
        UserName:"Impriteshchoubey",
        FullName:{
            firstName:"Pritesh",
            LastName:"Chaturvedi"
        }
    }

}
//accesing values
// console.log(obj1.Name.UserName);
//=> Impriteshchoubey

// console.log(obj1.Name.FullName.LastName);
//=>Chaturvedi



/****Joining two objects************ */

const emp1={
    name1:"Rohit",
    salary1:27500
}
const emp2={
    name2:"Purohit",
    salary2:27501
}
/******************ASSIGN(TARGET,SOURCE)********** */
//using assign method assign(target,source)
//  const company=Object.assign(emp1,emp2)



//note:If keys of the object are same,then values is considered source into target. 



// console.log(company)
//=>{ name1: 'Rohit', salary1: 27500, name2: 'Purohit', salary2: 27501 }



//console.log(emp1);
//=>{ name1: 'Rohit', salary1: 27500, name2: 'Purohit', salary2: 27501 }



//They object key values are copied to target object(emp1) as well as in obj(Employee)




//improved method for assigning and returning a new object is using a {} as target element this will copy the objects values only in the assigned variable(company)

const company=Object.assign({},emp1,emp2)
// console.log(company)
//=>{ name1: 'Rohit', salary1: 27500, name2: 'Purohit', salary2: 27501 }


//console.log(emp1);
//=>{ name1: 'Rohit', salary1: 27500 }



/**************directly Joining********* */

const obj3={emp1,emp2}
//console.log(obj3);


/***********Using spread Operator************* */
//mostly  used for joining
const obj4={...emp1,...emp2}
console.log(obj4);




//some other Interesting methods
//printing keys or values is in form of array
// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));


// console.log(Object.entries(obj4));
//arrays inside array containing key values



//to check whther an object has it property in output of true or false

console.log(emp1.hasOwnProperty("name1"));//true
console.log(emp1.hasOwnProperty("age"));//false





//In databases ,the object are holded inside arrays
let database=[{emp1},{emp2},6]
console.log(database);

console.log(database[0]);