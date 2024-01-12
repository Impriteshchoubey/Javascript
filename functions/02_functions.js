//using ...REST or ...spread OPerator in function

//example of calculating prices and counting  of items in cart

// function TotalCartPrice(...price){
//     return price
// }

// console.log(TotalCartPrice(100,199,299,399));
// //[ 100, 199, 299, 399 ]



//another working
// function TotalCartPrice(price1,price2,...price){
//     return price
// }

// console.log(TotalCartPrice(100,199,299,399));
// //[ 299, 399 ]



//function with object
function  IntroSummary(object){
    return `Greetings, I am ${object.name} from ${object.place} and I am a 
    ${object.profession} of ${object.trustee}`
}


CV={
    name:"Pritesh Chaturvedi ",
    place: "Rohtas",
    profession: "Student",
    trustee:"S.A.I.T.M "
    
}

console.log(IntroSummary(CV));
//Greetings, I am Pritesh Chaturvedi  from Rohtas and I am a Student of S.A.I.T.M 


console.log(IntroSummary({
    name:"Shivesh",
    profession:"Team Leader",
    place:"Banaras",
    trustee:"Cars 24"

}));
//Greetings, I am Shivesh from Banaras and I am a Team Leader of Cars 24



//function with arrays
//to find no. of items in array
function No_Of_Items(anyArray){
    return anyArray.length
}

array1=[10,20,30,40,50]
console.log(No_Of_Items(array1));//5

console.log(No_Of_Items([90,342,2453,434]));//4