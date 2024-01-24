//FILTER method is used to return the values if the conditions is satisfied.ex:
const stack=[1,2,3,4,5,6,7,8,9,10]
//stack.filter(num=>console.log(num>4))
//it prints values in form of true or false
/**false
false
false
false
true
true
true
true
true
true */


const numbers=stack.filter(num=>num>4)
//console.log(numbers);
//=>[ 5, 6, 7, 8, 9, 10 ]


//always return manually while using {} as it return an object

//const numbers=stack.filter(num=>{return num>4})
//console.log( numbers);
//=>[ 5, 6, 7, 8, 9, 10 ]


//using foreach() method
let element=[]
stack.forEach(num=>{
    if(num>4){
        element.push(num)
    }
})
//console.log(element);

//=>[ 5, 6, 7, 8, 9, 10 ]

/*++++++Lets have Example from databse++++++++++ */
const Books=[
    {title:"one",genre:"science",publish:1980,edition:2003},

    {title:"two",genre:"history",publish:1983,edition:2003},

    {title:"three",genre:"science",publish:2001,edition:2003},

    {title:"four",genre:"history",publish:1989,edition:2003},
   
    {title:"five",genre:"science",publish:2020,edition:2003},
   
    {title:"six",genre:"politics",publish:2003,edition:2003},
   
    {title:"seven",genre:"math",publish:2009,edition:2003},
   
    {title:"eight",genre:"politics",publish:2015,edition:2003}
]

//filter our history books
const HistoryBooks=Books.filter(book=>book.genre==="history")
//console.log(HistoryBooks);

//filter out books published after 2000
const BooksAfter2000=Books.filter(book=>book.publish>2000)
//console.log(BooksAfter2000);

//filter out science books published after 2015
const Sci_Books_After2015=Books.filter(book=>book.publish>2015 && book.genre==="science")
//console.log(Sci_Books_After2015);

