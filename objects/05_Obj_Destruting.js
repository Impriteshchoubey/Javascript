//JavaScript object destructuring which assigns properties of an object to individual variables.


let obj1={
    FullName:"Pritesh Chaturvedi",
    class:"cse 3rd",
    Roll:223064

}
// console.log(obj1.name)
// console.log(obj1.name);//.....baar baar kr rhe hain
/*kabhi kabhi kisi object ka hum value ya data ko zaaada acess karte hai to (objectName.Key) baar baar use krte hai,jisse likhne me time lagta hai baar baar kon utna likhega

isiliye hum OBJECT DESTRUCTOR ka istemaal krte,ye kuch nhi bas,
Object ke keys ko ek alg variable name  assign krdeta hai or hum value directly KEYNAME dalkar data fetch kr sakte hai
*/

console.log(obj1.FullName);//accesing bat lamba hai thoda

//destrutring an key of object.
const {FullName}=obj1//=>Pritesh Chaturvedi
console.log(FullName);//=>Pritesh Chaturvedi
// //hum directly key name se value fetch krrhe

// //ab hum chahte hain key key ka naam Bada lag rha kaafi to hum usko Small name assign krden taaki value acess krne me or jaada asaani ho

const {FullName:name}=obj1
console.log(name);//=>Pritesh Chaturvedi