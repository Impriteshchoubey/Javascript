//local scopes:variables that are assingned within any function or any {} and can only be accesible inside the {} and are distroyed outside the scope.ex:

//NOTE:- VAR is an excpetion,Therefore use of VAR should be rejeceted
var c=300

{let a="bahadur"
const b=7
var c=9
// console.log(a)   //bahadur
// console.log(b)   //7
// console.log(c)   //9
}
//console.log(a);//a is not defined
//console.log(b);//b is not defined
// console.log(c);//9 error



//GLOBAL SCOPE:variable thar are assigned outside globally and can be accesible throught the entire programme till it is not destroyed.

let a=90
{   
    console.log(a);  //90 inside
}

console.log(a); //90
