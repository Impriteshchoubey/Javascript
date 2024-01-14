//declaring a nested function and learning scope 
//it means A child function can acces all the properties of father but a father cannot acces the property of child.

///this is also called CLOSURE
function father(){
    const FatherName="Mahabirwaa"
      function child(){
        const childName="Putra"
    console.log(`${childName} is son of ${FatherName} `//accesible
      )}    
    
   // console.log(childName)//Error:Undefiend
    child()  
}
// console.log(FatherName);//not defined :ERROR
father()
//Putra is son of Mahabirwaa 


//using nestewd if
if(true){
   const username="priyesh"
   if(username==="priyesh"){
    const title=" choubey"
    console.log(username+ title)
   }
//   console.log(title)// ERROR :NOT DEFINED
  console.log(username)//priyesh
}

//console.log(username)//ERROR:not defined


/******************INTERESTING*******************/
//defining a function globallly and accesing before or after declaration.
message()
function message(){
    console.log("Goodmorning sir!")
}


//declaring a function in a variable and can only aceesed after decalaration

// console.log(msg)//ERROR:cannot acces before init...
const msg=function message(){
  console.log("Goodmorning sir!")
}
console.log(msg);
