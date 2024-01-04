/*Javascript is a Dynamically Typed language,which means we didnot assign the type to any variable.it self assign the type of variable   */

//IN JS,same variables can be reassigned to new values of different types Because of dynamicaaly typed language. example:

// let Age=13
// Age="Thirteen"
// console.log( Age) //Thirteen




/*Primitive datatypes:
Number,String,BigInt,Boolean,Symbol,Null,Undefined
*/

// let Number_Type=785623
// let String_Type="Gorakh"
// let BigInt_Type=987654321n
// let Boolean_Type=true
// let Undefioned_type;//Undefined
// let Null_type=null
// let Symbol_type=Symbol("1234")
 
//for symbols with same value but different varriable name are not equal

// let Id=Symbol("789")
// let Another_Id=Symbol("789")
// console.log(Id==Another_Id);//False



/*Non Primitive or Referenced Datatypes:
Array,Object,Functions
*/

// let Array_types=["heelo","hi","India"]
// console.log(typeof Array_types);//objects


// let object_Employee={
//     name:"Bahadur",
//     Age:21
// }
// console.log(typeof object_Employee);//object


// let funtion_type=function(){
//     console.log("Heelo Dear,Hope u r enjoy")}
// funtion_type()
// console.log(typeof funtion_type);//function


/*typeof return values of Datatypes
number=>"Number"
string=>"String"
boolean(True/False)=>"Boolean"
bigint=>"BigInt"
sumbol=>"Symbol"
undefine=>"undefined"
null=> "object" ->This is alternate case

Array=>"object"
function=>"function"
object=>"object"

*/



