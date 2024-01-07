//reducing an array(sum)

let list=[1,3,5,-7,9]
let sum=0
//using for loop

for(items of list){
    sum+=items
}
console.log(sum);//11


//using reduce method
/*a means "accumulator"; c means"currentValue"
working steps:=
a=0, c=1  => a=1
a=1, c=3  => a=4
a=4, c=5  => a=9
a=9, c=-7 => a=2
a=2, c=9  => a=11 => sum


*/
sum=list.reduce((a,c)=> a+c)
console.log(sum);//11