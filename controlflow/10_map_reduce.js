const numbers=[1,2,3,4,5,6,7,8,9,10]
//maps are auto returning methods
//const item=numbers.map(num=> num+5)

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