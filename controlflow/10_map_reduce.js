const numbers=[1,2,3,4,5,6,7,8,9,10]
//maps are auto returning methods
const item=numbers.map(num=> num+5)

//const item=numbers.map(num=>num>5)//return true/false
//console.log(item)


//chaining using mutple methods like map , filter etc.

const MultiMethods=numbers
                    .map(num=>num*10)
                    .map(num=>num+1)
                    .filter(num=>num>40)

console.log(MultiMethods)
/**[
    41, 51,  61, 71,
    81, 91, 101
  ] */


  /////////////////////////////////////////////////////
  ///////////////REDUCE METHOD/////////////////////////
  //method used to sum up the entire array or reduces the array or object.it hold two values accumulator and current value. ex:

  const list=[1,2,3,4,5]
  const sum=list.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0)
  console.log(sum);//=> 15

  /**
   *  accumulator=>0, currentvalue=1, sum=>1 
   *  accumulator=>1, currentvalue=2, sum=>3 
   *  accumulator=>3, currentvalue=3, sum=>6 
   *  accumulator=>6, currentvalue=4, sum=>10 
   *  accumulator=>10, currentvalue=5, sum=>15 
   */


  const cart=[
    {itemName:"Pant",
  price:299},
    {itemName:"shirt",
  price:399},
    {itemName:"kurta",
  price:2999},
    {itemName:"suit",
  price:4299},
  ]
//initial value=0
  const totalAmount=cart.reduce((item,curValue)=>item+curValue.price,0)

  console.log(totalAmount);
  //=>7996
  
