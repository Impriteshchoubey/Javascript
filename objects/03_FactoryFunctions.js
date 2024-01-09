//Sometime we need to create different objects with same parameters but different vales, therefore declaring it manually is a lengthy task also if found any bug in parameter you need to fix all th objects values this becomes more critical and messy task this can be resolved using a FACTORY FUNCTIONS 

//lets look at an example
function company(employeeName,Id,isloggedIn){
    return{
        Name:employeeName,
        employeeId:Id,
        isloggedIn,
        greet(){
            console.log(`welcome ${this.Name} `)
        }
    }

}

let employee1=company("Sourav",223044,true)
console.log(employee1)
console.log(employee1.greet());


let employee2=company("Pritesh",223064,true)
console.log(employee2)
console.log(employee2.greet());



let employee3=company("Rahul",223063,false)
//assigning new values to objects
employee3.email="chaurasia420@hoichoi.com"
console.log(employee3)
console.log(employee3.greet());



