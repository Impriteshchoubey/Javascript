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

//using assign method assign(target,source)
// const company=Object.assign(emp1,emp2)



//note:If keys of the object are same,then values is considered source into target. 



// console.log(company)
//=>{ name1: 'Rohit', salary1: 27500, name2: 'Purohit', salary2: 27501 }



//console.log(emp1);
//=>{ name1: 'Rohit', salary1: 27500, name2: 'Purohit', salary2: 27501 }



//They object key values are copied to target object(emp1) as well as in obj(Employee)




//improved method for assigning and returning a new object is using a {} as target element this will copy the objects values only in the assigned variable(company)

const company=Object.assign({},emp1,emp2)
console.log(company)
//=>{ name1: 'Rohit', salary1: 27500, name2: 'Purohit', salary2: 27501 }


console.log(emp1);
//=>{ name1: 'Rohit', salary1: 27500 }


