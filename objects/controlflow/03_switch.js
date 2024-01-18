// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//to check for multiple cases
//ex:simple calculator
const a=10
const b=5
const sign= "/"
switch (sign) {
    case "+" : 
                console.log(a+b);
                break;
    case "-": 
                console.log(a-b);
                break;
    case "/": 
                console.log(a/b);
                break;
    case "*": 
                console.log(a*b);
                break;
    default:
            console.log("incorrect sign");
            break;
}