//various ways to empty an array
let array=[1,2,3,4,5]
another=array


//one
//only work until the array has no other reference
// array=[]
// console.log(another);//[ 1, 2, 3, 4, 5 ]
// console.log(array);//[]




//two=> making length 0,will truncate all elements
// array.length=0
// console.log(array);//[]


//three

// array.splice(0,array.length)
// console.log(array)//[]




//four

while(array.length>0){
    array.pop() }
console.log(array);//[]