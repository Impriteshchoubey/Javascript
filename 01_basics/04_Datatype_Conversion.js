//Conversion of datatypes and their outputs

//converting a string to a number
let Myname="Pritesh"
//to convert str into Number
let Name_in_Num=Number(Myname)
console.log(typeof Name_in_Num)//Number
console.log(Name_in_Num)
//NaN{Not a Number}


//converting a number to string
let score=274
//convert to string
let st_Score=String(score)
console.log(typeof st_Score)//string
console.log(st_Score)//274 is a string form


//string to boolean
let bool_name=Boolean(Myname)
console.log(typeof bool_name)//boolean
console.log(bool_name)  //true    

stock=""
let bool_stock=Boolean(stock)
console.log(typeof bool_stock)//boolean
console.log(bool_stock)//False

//number to boolean
let valid=1
let bool_valid=Boolean(valid)
console.log(typeof bool_valid)//boolean
console.log(bool_valid)//true

let valid2=0
let bool_valid2=Boolean(valid2)
console.log(typeof bool_valid2)//boolean
console.log(bool_valid2)//false


//converting Null into number
let value1=null
let num_value1=Number(value1)

console.log(typeof num_value1)//0

//undefine to number
let value2=undefined
let num_value2=Number(value2)
console.log(typeof num_value2)//number
console.log( num_value2)//nan

//undefine to string
let str_value2=String(value2)
console.log(typeof str_value2)//string
console.log(str_value2)//undefined





