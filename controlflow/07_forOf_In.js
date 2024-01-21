//forof loop is auto iterable loop
// for (const iterator of object) {
//                             }

const list=["he","she","it","they","i"]
// for (const item of list) {
//     console.log(item)      }



//for-of loop will not work on object as objects are not iterable
const obj1={js:"javascript",
cpp:"c plus plus",
java:"Java"
}

// for (const item of obj1) {
//     console.log(item);
// }


//to check if any space is identified in string stop execution
const string="Namaste  Bharat"
for (const letter of string) {
    if(letter==" ") break
   // console.log(`letter of string are ${letter}`);
    
}


/*++++++++++++++++++++FOR IN+++++++++++++++++++ */
