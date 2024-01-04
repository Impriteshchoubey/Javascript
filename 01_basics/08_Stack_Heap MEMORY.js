//STACK(Primitive Datatypes)
//  HEAP(Non-primitve or Refrence datatype)

/*in Stack memory, when you are changing a value to a variable of primitive datatype, a copy of the original variable is created and given to you for modifications in its values.
this doenot change the original value of the Varaible.*/

let User_salary=5000
new_salary=User_salary
new_salary=10000
console.table([User_salary,new_salary])
//User_Slary=>5000 doenot the chnage the original value
//new_salary=>10000 value changed to given variable


/*in HEAP memory,when you changing a value to Non-primitive type like objects,a reference to the original variable is given for changing in values.
this changes the orginal variable as well as current variable     */

let Employee1={Email:"Pritesh@google.com",
salary:27500}

let Employee2=Employee1
console.log(Employee2.Email)//Pritesh@google.com

Employee2.Email="Mayank@google.com"
console.log(Employee2.Email)//Mayank@google.com
console.log(Employee1.Email)//Mayank@google.com

//console.table([Employee1,Employee2])



