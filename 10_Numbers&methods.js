//ways to assign a number
//simple method generally used,javascript auto detects that its a number variable

let Roll_No=223064
console.log(Roll_No);//223064

//another way to strictly define number variable
let Regn_No=new Number(22305672)
console.log(Regn_No);//[Number: 22305672]


//methods for numbers

//convert to string and then capable to include string methods also
// console.log(Regn_No.toString());//string

// console.log(Regn_No.toString().length);//8 characters

// console.log(Regn_No.toString().search(5));//4 th index present

// console.log(Regn_No.toString().replace(0,9));//22395672
// console.log(Regn_No.toString().slice(0,5));//22305

//other  Number methods

// let balance=123.8976
// console.log(balance.toPrecision(3));//124
// console.log(balance.toPrecision(5));//123.90

// console.log(balance.toLocaleString());//123.898


// let code=1234
// console.log(code.toFixed(2));//1234.00 =>2 decimal places

// console.log(code);//1234.00 =>2 decimal places

//+++++++++++++++++++++MATHS+++++++++++++++++++++++++++

console.log(Math)
console.log(Math.PI)//3.141592653589793

console.log(Math.LN10)//log 10 2.30258509

console.log(Math.ceil(10,12,16,17,3,4))//10

console.log(Math.floor(134.567))//134

console.log(Math.max(10,12,16,17,3,4))//17
console.log(Math.min(10,12,16,17,3,4))//3


console.log(Math.round(789.4987))//789
console.log(Math.sqrt(144))//12
console.log(Math.pow(2,3))//8
console.log(Math.abs(-113.7675).toFixed(2))//113.76









