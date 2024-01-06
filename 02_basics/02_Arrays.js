//some methods to join two or more arrays
const marvel=["Ironman","Thor","Captain America"]
const dc=["Superman","Batman","Flash"]

// marvel.push(dc)
// console.log(marvel)//Array inside array
// //['Ironman','Thor','Captain America',[ 'Superman','Batman', 'Flash' ]]
  
//concatenation all elements in single array and return new array
const AllHeroes=marvel.concat(dc)
console.log(AllHeroes);
//[ 'Ironman', 'Thor', 'Captain America', 'Superman', 'Batman', 'Flash' ]



//spread methods used to join two or more arrays in simple 
const new_array=[...marvel,...dc]
console.log(new_array);
//[ 'Ironman', 'Thor', 'Captain America', 'Superman', 'Batman', 'Flash' ]




//to convert various elemnts or variables into an array
let name="pritesh"
let age=21
let email="pritesh@google.com"

let data_array=Array.of(name,age,email)
console.log(data_array);
//[ 'pritesh', 21, 'pritesh@google.com' ]




//array inside array into single array
//depth of array means no of arrays inside array
//below array has depth 3 [depth 1,[depth2],[array,[depth 3]]]
const Array5=[1,3,5,[2,4,6],7,[8,9,[10,11]]]
console.log(Array5.flat(1));//1 ,mtlb kitne depth tak array banan hai
//[ 1, 3, 5, 2, 4, 6, 7, 8, 9, [ 10, 11 ] ]

//agar sab ko ek aaray me bana ho to depth infinity krdenge
console.log(Array5.flat(Infinity));
//[ 1, 3, 5, 2,  4, 6, 7, 8, 9, 10,11]



//other methods

console.log(Array.isArray(Array5));//True, Array5 is array
console.log(Array.isArray("Pritesh"));//False


//creates array from object
console.log(Array.from("pritesh"));
//['p', 'r', 'i','t', 'e', 's','h' ]

console.log(Array.from({name:"pritesh"}));//intersting []
//we need to predefine whether to create array of keys or values