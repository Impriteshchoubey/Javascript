//CONSTRUCTOR FUNCTION IS similar to Factory Functions
//Its Another way To create an object function

//It is Variable is Denoted by PASCAL NOTAIONS like
//OneTwoThree(first letter of each is capital)

//we create a  object using Object constructor "NEW"
//and target the object inside function using "THIS" method


// example

function Bank_Details(ACno,name,balance){
    this.Ac_No=ACno,
    this.name=name,
    
    this.display=function(){
        console.log(`Hello dear ${this.name} your ac balance is ${balance}`);
    }

}

let customer1=new Bank_Details(7838265441,"Purohit",562)
console.log(customer1.display());
//Hello dear Purohit your ac balance is 562
customer1.email="rohan@gunda.com"
console.log(customer1);