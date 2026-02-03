// function saymyname(){
//     console.log("T"),
//      console.log("T"),
//       console.log("T")
//       , console.log("T"),
//        console.log("T")
//        , console.log("T")
// }
// saymyname()



// function addTwonumbers(number1,number2){
//     console.log(number1,number2)

// }
// addTwonumbers(3, "4")

function addTwonumbers(number1,number2){
    return number1+number2
//    let result = number1 + number2             // after return statement code dont read anything
//    return result

}
const result = addTwonumbers(3, 5)
// console.log("result :", result)


function userLoggedIn(username) {
    
    if(username===undefined){               // instead of username===undefined this u can do !username
        console.log("Please enter name")
        return
    }
    return `${username} just logged in`
}
// console.log(userLoggedIn("Tarang"))
// console.log(userLoggedIn())

function CalculateCartValue(...num1){
    return num1
}
// console.log(CalculateCartValue(200,400,600,1000))

const user = {
    username:"Tarang",
    price:199
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObjects(user)

handleObjects({
    username:"sam",
    price:299
})


const mynewArray = [100,200,300,400]
function returnSecondValue(getDayrray){
    return getDayrray[1]
}
// console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([100,200,300,400]))





