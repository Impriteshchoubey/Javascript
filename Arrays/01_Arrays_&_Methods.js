/*ARRAY is an OBJECT type.
Array is a collection of multiple items under a single variable name.
They contains items of different datatypes or similar datatypes.

PROPERTIES of an Array:-
=>Arrays are Mutable,we can modify its values and length.it is resizable.

=>in JS,Arrays is Zero-Indexed,means the first element is at index value  Zero(0), second element at index 1  and so on..

=>we can access elements of arrays using number (Index)
Not with any "string".

=>Shallow Copies:-Any changes made in the array using Array Operations,the chnage will also incurs on the original array.A reference of the original array is provided to the variable where we are changing the values.
*/

//ways to create an Array
let Array_1=[1,2,3,4,5,6] //normal method
let Array_3=["Pritesh","is",20,"years"]
//array of different data-types

let Array_2=new Array(3,4,5,6,7,8)//another method

//acessing values of array using index value in [i]
console.log(Array_1[2]);//3; 2 is present at index 3

console.log(Array_3["is"]);//x wrong method


//Array Methods:there are various methods some of them are..

//+++++++++++++++++++++LENGTH METHOD++++++++++++++
//to find length of elements in array
console.log(Array_1.length);//6 length



//length can  "EXTENDS" the array by adding empty elements
// fruits=["apple","banana","cherry"]
// console.log(fruits.length);//3 length

// fruits.length=5
// console.log(fruits);
// //[ 'apple', 'banana', 'cherry', <2 empty items> ]
// console.log(fruits.length);//5



//length can  also " REDUCE" the array by deleting elements
// Square=[1,4,9,16,25,36,49,64,81,100]
// console.log(Square.length);//10 length

// Square.length=6
// console.log(Square);
// //[ 1, 4, 9, 16, 25, 36 ]
// console.log(Square.length);//6


//+++++++++++++++++++++PUSH()++++++++++++++++++++
 let items=new Array("pen","paper","eraser")
 items.push("sharpener")//insert element at last
 console.log(items);
 //=> [ 'pen', 'paper', 'eraser', 'sharpener' ]

 //+++++++++++++++++++++POP()++++++++++++++++++++
 items.pop()//removes last elemnt of array
 console.log(items);
 //=> [ 'pen', 'paper', 'eraser']

 //*****************SORT()********************** */
 let list= new Array(46,3,643,235,8,5)
 list.sort()//arranges elemnts
 console.log(list);
 //=>[ 235, 3, 46, 5, 643, 8 ]//descending

 //****************SHIFT()************************ */
const list2=[11,22,33,44,55]
 list2.shift()//removes first elemnt of array
console.log(list2)//=>[ 22, 33, 44, 55 ]

//****************UNSHIFT(value) **********/
list2.unshift(99)//inserts elemnt at first in array
console.log(list2)
 //=>[ 99, 22, 33, 44, 55 ]



 //***************SLICE() **********/
 const list3=["peter","piper","pickled","pepper"]
 console.log(list3.slice(1,3))//selects element in range ,range is not included
 //=>[ 'piper', 'pickled' ]
 console.log(list3);//no changes in original array
 //=>[ 'peter', 'piper', 'pickled', 'pepper' ]


 //****************SPLICE()***********/
 //it removes the element including the range and returns deleted elemtn

 console.log(list3.splice(1,3));
 //[ 'piper', 'pickled', 'pepper' ]

 console.log(list3);//"peter"

 // list2=[99,22,33,44,55]

 list5=list2.splice(1,3)
 console.log(list5);//[ 22, 33, 44 ]
 console.log(list2);//[ 99,55 ]


//**********************JOIN()************** */
//convert array into strings
 list6=list2.join()
 console.log(list6);//99,55
 console.log(typeof list6);//string


 //*****************INCLUDES()************** */
 //check whether value is present in array or not
 list8=[9,7,4,3,2]
 console.log(list8.includes(5));//false
 console.log(list8.includes(3));//true



 //****************IndexOf()************ */
 //reverse the array
 console.log(list8.reverse());
 //=>[ 2, 3, 4, 7, 9 ]


 








