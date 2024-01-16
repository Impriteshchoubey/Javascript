/**
 * JAVASCRIPT EXECUTION CONTEXT
 means, ki koi bhi file ko JavaSript Run kaise karegi EXECUTE kaise karegi

 *Execution 2 context me hoti hai waise:
 =>Global Execution Context
 =>Function Execution Context
 =>Eval execution Context(kam use hota hai)


 *GLOBAL EXECUTION CONTEXT:-
 iske bhi 2 sub phase hai:
 =>Memory Creation Phase:-
     allocates memory to variable or anything that is declared

 =>Execution Phase:-
    isme execution hota hai like plus,minus etc, jo bhi krna hai 


    Lets Understand how a code executes
for Example:
let val1=10
let val2=5
function AddNum(num1,num2){
    let total= num1+num2
    return total   }  

let result1=AddNum(val1,val2)
let result2=AddNum(10,2)

Steps:
1=> Global Execution/Environment:
        koi bhi code run ho wo sabse pehle Global execution se hoga,jisme (THIS) allocate hoga ,har execution me THIS aloocate hoga hin hoga.
        
|=>  total is returned
| 2=> Memory Phase:stores and all allocate variable
|     Val1-> Undefined
|    Val2->Undefined
|     AddNum-> Definition
|     result1->Undefined
|     result2->undefined
|
|  3=> EXECUTION PHASE:
|    val1->10
|    val2->5 
|    AddNum->New context ---------------------------|
|             | Nev Variable environmewnt           |
|             |    +Exceution Thread                |
|             |-------------------------------------|     
|    after execution this contexte is deleted        |   
|                                                    |
|             Execution Phase<-------MEmory Phase<---|
|                   ||                  ||
|                   \/                  \/
|               num1->10          val1->undefined
|                 num2->5          val2->undefined
--------------|total->15|         total->undefined        
                  

 */