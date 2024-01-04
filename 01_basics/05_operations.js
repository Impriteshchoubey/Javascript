//Basic OPerations
let a=28
let b=7

console.log(a+b)//add
console.log(a-b)//sub
console.log(a*b)//multiply
console.log(a**b)//a raise to power b
console.log(a/b)//a divide by b
console.log(a%b)//remainder when a divide by b

//wrong method for implementing opeations
console.log(2+3*5-8/9);

//coorect method use of parenthesis for the expressions to execute first like ex:
console.log((2+3)*5-(8/9));


//other methods to string to number conversions

console.log(1+"5");// output=>15
console.log("5"+1);// output=>51
console.log(1+3+"5");// output=>45
console.log("5"+1+3);// output=>513

c=1+" hi "+3
console.log(c);// output=>1 hi 3
console.log(typeof c);//string


e=1+"5"+3
console.log(e);// output=>153
console.log(typeof e);//string

f=1-"5"+3
console.log(f);// output=> -1
console.log(typeof f);//Number


//another Increment decrement operations
//Infix postfix expressions 


//Postfix
/*If used postfix, with operator after operand (for example, p++), the increment operator increments and returns the value before incrementing.*/
let p=4
let q=p++
console.log(`p:${p} and q=${q} `)
//p=5 & q=4





//Prefix:
/*If used prefix, with operator before operand (for example, ++z), the increment operator increments and returns the value after incrementing.
*/
let z=4
console.log(z);//Z=4
let y=++z
console.log(`z:${z} and y=${y} `)
//z=5 & Y=5
