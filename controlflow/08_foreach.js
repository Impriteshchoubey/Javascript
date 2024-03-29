//for each
// array.forEach((item,index,array) => {
//     });


const myArray=["bharat","mata","ki","Jai"]
//one way:
// myArray.forEach(function(item){
//     console.log(item)})


//second way:
// myArray.forEach((item)=>{
//     console.log(item)
// })


// third way:
// function show(item){
//     console.log(item);
// }
// myArray.forEach(show)  //refernce of fucntion given


// +++++++++++++++++++++++++++

// myArray.forEach((item,index,array)=>console.log(`${item} has index ${index} of array ${array}`))

/**
 bharat has index 0 of array bharat,mata,ki,Jai
mata has index 1 of array bharat,mata,ki,Jai
ki has index 2 of array bharat,mata,ki,Jai
Jai has index 3 of array bharat,mata,ki,Jai
 */



//OBJECTS INSIDE ARRAY

const marvels=[
    {hero1:"spiderman",
power:"web shooters"},

    {hero2:"Ironman",
power:"most technological weapons"},

    {hero3:"captain America",
power:"man power and Shield"}
]

marvels.forEach((hero)=>console.log(hero.power))
//web shooters
// most technological weapons
// man power and Shield


/**++++++++++NOTE-REMINDER+++++++++++ */
//as forEach function doesnot return any value it shows UNDEFINED however it will print the values if it is passed to a variable
const arr=["hi","hello","how"]
const sup=arr.forEach((item,index)=>console.log(item,index))
//value is printed but
//console.log(sup) //=>Undefined

