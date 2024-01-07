let stack=new Array(1,2,"pritesh","choubey")

for(items in stack)
console.log(items);//0 1 2 3

//for in methods 
for (const key in stack) {
   
        const element = stack[key];
        console.log(element);
    
}
//1 2 pritesh choubey


//for each

stack.forEach((items,index) => console.log(index,items));
/*
0 1
1 2
2 pritesh
3 choubey */