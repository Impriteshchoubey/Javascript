/***************************EXCERCISE-1**************** */ 
function arrayFromRange(min,max){
    let arr=new Array()
    for(n=min;n<=max;n++){
        arr.push(n)}
        return arr
    }
    
    const numnbers=arrayFromRange(-10,-4)
    console.log(numnbers);
    //[-10, -9, -8, -7, -6, -5, -4]
    
    const numbers=arrayFromRange(5,10)
    console.log(numbers);
    //[ 5, 6, 7, 8, 9, 10 ]
    
    
/***************************EXCERCISE-2**************** */ 
const num=[1,2,3,4]

function includess(array,searchElement){
    
    for(let element of array)
    if (element===searchElement)
    return true
return false

}


console.log(includess(num,3));


/***************************EXCERCISE-3**************** */ 
const list1=[2,3,4,5,1,2]
const output=except(list1,[1,2])
console.log(output)

function except(array,excluded){
    let output=[]
    for(let items of array)
        if(!excluded.includes(items))
            output.push(items)
        
    return output    
    
}