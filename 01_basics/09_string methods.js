//ways to write a string
let str1="Hello-this-is-a-string"
console.log(str1)

let str2=new String(`Hello-this-is-another-srting`)
console.log(str2)

// some method for string manipulation
//LowerCase
console.log(str1.toLowerCase());

//Uppercase
console.log(str1.toUpperCase());

//find Index of particular string
console.log(str1.indexOf("a"));//14

//find length of string
console.log(str1.length);//22

//to replace a character in string
console.log(str1.replace("a","is"));//replace a with is


//slice to acces part of string 
console.log(str2.slice(3,18))//lo-this-is-anot

//to search index of a character in string
console.log(str2.search("another"))//found at 14

//substring similar to slicing
console.log(str2.substring(3,18))//lo-this-is-anot

//trim to remove extra spaces around the string
let str3="     howwe    "
console.log(str3.trim())//howwe

//split the character in substring
str4="hello "
console.log(str4.split())//[ 'hello ' ]

//to find character at index value
console.log(str1.charAt(14))//a





