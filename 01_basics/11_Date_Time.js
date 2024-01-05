//Date and time 

let Todays_date=new Date()
console.log(Todays_date);//2024-01-05T09:54:33.663Z
//above date is unreadable properly

//TYPEOF DaTE
console.log(typeof Todays_date);//OBJECT


//readable date mathods
console.log(Todays_date.toDateString());
//Fri Jan 05 2024

console.log(Todays_date.toLocaleDateString());
//1/5/2024

console.log(Todays_date.toString());
//Fri Jan 05 2024 09:58:24 GMT+0000 (Coordinated Universal Time)


//+++++++++To provide custom date+++++++++++++++
let custom_date= new Date("2003-10-03");
console.log(custom_date.toDateString());
// output=> Fri Oct 03 2003


//+++++++++To provide custom date+++++++++++++++
let custom_date2= new Date(2003,6,3,0,5);
//yyyy,m,d,hr,min
console.log(custom_date2.toLocaleString());
// output=> 7/3/2003, 12:05:00 AM


//+++++++++To provide custom date+++++++++++++++
let custom_date3= new Date(2003,6,3,0,5,35);
console.log(custom_date3.toUTCString());
// output=> Thu, 03 Jul 2003 00:05:35 GMT



//++++++++++++++++++TIME-STAMP+++++++++++++++++++++++
//we use time stamps to sompare two or  more times
//time stamps values are genrally in milliseconds from 1970 till now

let time_stamp=Date.now()
console.log(time_stamp);//1704450756362 miliseconds



//date methods  to get
let new_date=new Date()
console.log(new_date.getDate());//today 5 tareek
console.log(new_date.getDay());//day 5 friday

console.log(new_date.getMonth());//0 means january
console.log(new_date.getTime());//1704451244161 milsec


console.log(new_date.toString('default',{
    day:"2-digit",
    weekday:"long",
    month:"long",
    year:"numeric",
    
    
    
}))