// if

const isUserLoggedin = true
const temperature = 41

// if (temperature<50){
//     console.log("less than 50")
// }else {
//     console.log("temperature is greater than 50")
// }
// console.log("executed")

// if(2!=3){
//     console.log("executed")
// }              < , > , == , === , != , !== , <= , >= 

const score = 200

// if(score>100){
//     let power = "fly"
//     console.log(`User power : ${power}`) 
// }
// console.log(`User power : ${power}`)      // this line will give error bcs power scope is not inside it 


const balance = 1000

// if(balance<500){
//     console.log("less than 500")
// } else if(balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }



const userLoggedIn = true
const debitCard = true
const loggedInbyGoogle = false
const loggedInbyGmail = true

if (userLoggedIn && debitCard ){
    console.log("Allow to buy course")
}
if (loggedInbyGoogle || loggedInbyGmail){
    console.log("User logged in")
}






