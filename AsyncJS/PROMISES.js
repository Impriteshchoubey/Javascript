//PROMISES is an object that represents the eventual completion or failure of any asynchronous operation and resulting value

//asaan bhasha men, Promises ek object hai jo ki execute hoga agar koi kaam ho rha hai(resolve) ya fir nahi ho rha hai(rejection).

//state in Promises:
//Pending: 
//fulfilled:
//rejected:

const PromiseOne=new Promise(function (resolve,reject){
    //isme hum db calls, data injection in db, network call,cryptography etc.jaise task krte hain
setTimeout(function(){
    console.log("Promise one is done");
    resolve();//used to connect to then function
},1000);

})

PromiseOne.then(function(done){
console.log('Task sucesfull');
})



//second way
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise 2 is done");
        resolve();
    },2000)
}).then(function(){
    console.log('task2 completed');
})

//then =>resolve (completeion)
//catch=>error 

//third  rejection printing
const promiseThree= new Promise(function(myresolve,myreject){
    let workdone=false;
    setTimeout(()=>{
        if(workdone){
            console.log('task 3 done');
            myresolve();
        }else{
            console.log('work not done');
          
            myreject('ERROR:Work not done')
        }
    },2000)
})

promiseThree
.then(function() {
    console.log('task 3 is succesfull');
})
.catch(function (error) {
   console.log(error)});



//promise 4
new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username:"pritesh",
    email:"choubeyji@india.com"})
    },3000)
})
.then(function(data){
    console.log(data.email);
})



//promise 5
const promise5=new Promise((resolve, reject) => {
    let userLoggedIn=false;
    setTimeout(function(){
        if(!userLoggedIn){
            resolve({
                name:"mukesh",age:32,gender:'male'
            })
        }else{
            reject(`cannot predict`)
        }
    },4000)
})

promise5.then(function(user){
   return user.name;
})
.then(function(name){console.log(`${name} logged In`);})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log(`Programme sucees either User logged in or Not `);
})



//promise 6  USING ASYNC AWAIT: Try Catch method

const promiseSix=new Promise((resolve, reject) => {
    let male=true;
    setTimeout(function(){
        if(male){
            resolve({name:"Suresh",age:42,sex:"male"})
        }else{
            reject(`Error:Cannot predict Gender`)
        }
    },4000)
})

async function consumePromiseSix(){
    const response= await promiseSix
try {
    console.log(`${response.name} is male`);
} catch (error) {
    console.log(response);
}
}

consumePromiseSix()


//fetching Url data using tru catch
async function getData(){

 try {
    const url= await fetch('https://api.github.com/users/impriteshchoubey')
const data= await url.json()
console.log(data)

 } catch (error) {
    console.log(error);
 }

}
//getData()


//fetching url using then and catch method
setTimeout(function(){
    fetch('https://api.github.com/users/impriteshchoubey')
.then(function(data){
  return data.json()
})
.then(function(userdata){
    console.log(userdata.login);
})
.catch(function(err){
    console.log(`error in fetching`);
})
},5000)

