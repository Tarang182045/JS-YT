const userEmail =""
 if(userEmail){
    console.log("user have email")    // if string is empty then print else statemant but if its array([])
 }else{                               // then its will print if statement because its truthy value empty string not
    console.log("user don't have email")
 }


//falsy value : false, null , 0, -0 ,undefined , nan , bigint(0n) , ""

//truthy value : "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
    // console.log("Array is empty")
}
                                           // thid both are the methods to check its empty array or object 
const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    // console.log("Object is empty")
} 

/// Nullish coalesing Operator (??): null undfined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)


//Terniary operator
// condition ? true : false

const coffeyprice = 100

coffeyprice <=80 ? console.log("less than 80") : console.log("more than 80")

