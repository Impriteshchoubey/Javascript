//reducing an array
let arr=[1,2,3,4,5,5]
let sum=0

//using forlllop
for(let n of arr){
    sum+=n
}
console.log(sum);

//using reduce() method
const sum1=arr.reduce((accumulator,currentValue)=>accumulator+currentValue)

console.log(sum1)

