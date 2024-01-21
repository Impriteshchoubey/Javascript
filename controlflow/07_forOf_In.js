//forof loop is auto iterable loop
// for (const iterator of object) {
//                             }

const list=["he","she","it","they","i"]
// for (const item of list) {
//     console.log(item)      }



//for-of loop will not work on object as objects are not iterable
// const obj1={js:"javascript",
// cpp:"c plus plus",
// java:"Java"
// }

// for (const item of obj1) {
//     console.log(item);
// }
//will not execute  



//to check if any space is identified in string stop execution
const string="Namaste  Bharat"
for (const letter of string) {
    if(letter==" ") break
   // console.log(`letter of string are ${letter}`);
    
}


//MAPS:
//key value pairs in sequential order.duplicate values are not allowed
//const myMap = new Map()
const myMap = new Map()
myMap.set("js", "javaScript")
myMap.set("cpp","Cplus plus")
myMap.set("py", "Python")
myMap.set("py", "Python")

console.log(myMap);//=>object output


for (const [key,value] of myMap) {
    //console.log(`${key} has value ${value}`);
}

/*js has value javaScript
cpp has value Cplus plus
py has value Python */

/*++++++++++++++++++++FOR IN+++++++++++++++++++ */
//object
const obj2={js:"javascript",
cpp:"c plus plus",
java:"Java"
}
for (const keys in obj2) {
// console.log(`${keys} have value ${obj2[keys]}`);
}

/*js have value javascript
cpp have value c plus plus
java have value Java */



//FORIN ARRAYS
const superheroes=["thor","ironman","spiderman"]
for(const character in superheroes){
    //console.log(superheroes[character]);
}



//FORIN MAPS
//not execute anything
const Map2=new Map()
Map2.set(1,"India")
Map2.set(2,"USA")
Map2.set(3,"France")
Map2.set(4,"France")

for(const num in Map2){
    //console.log(num);
}