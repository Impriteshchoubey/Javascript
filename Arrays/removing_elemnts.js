const ABC=[1,3,4,5,6]

//Last
ABC.pop()//6 removed
console.log(ABC);//[ 1, 3, 4, 5 ]


//begining
ABC.shift()//removes 1
console.log(ABC);//[ 3, 4, 5 ]


//at middle
console.log(ABC.splice(1,1))//4 removed from index 1
console.log(ABC);//[ 3, 5 ]

