//filter()=> used to return new array with elemnts that is satisfied the condition


//to filter out positive number of aaray
let arr=[1,3,8,-1,5,-9]
filtered_array=arr.filter(n => n>=0)
console.log(filtered_array);
//[ 1, 3, 8, 5 ]


// to filter out all elemnts tahts aare odd and positive

odd_numbers=arr.filter(num=> num%2!=0 && num>=0)
console.log(odd_numbers);
//[ 1, 3, 5 ]



//to filter the restaurents that are open
let restaurents=[{name:"Dana-choga",status:"open"},
{name:"Dominos",status:"closed"},
{name:"pizzahut",status:"open"},
{name:"sipnslice",status:"closed"}
]

let open_restaurents=restaurents.filter(working => working.status=="open" )
console.log(open_restaurents)
/**[
  { name: 'Dana-choga', status: 'open' },
  { name: 'pizzahut', status: 'open' }
] */

// note:same can also be done using find method

