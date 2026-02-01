let score="33" // if number is "33abc" then valueinnumber gives NaN value for null its 0 and for undefind its NaN

console.log(typeof score)

let valueInNUmber = Number(score)
console.log(typeof valueInNUmber)
console.log(valueInNUmber) 


let isLoggedIn = 1 // if its sting then its ans is also true for 0 and space its false
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)   

let someNumber= 50
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

/*         operation        */

let value =3
let negvalue = -value
console.log(negvalue)

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(+true)
console.log(+"")

let gameCounter=100
gameCounter++
console.log(gameCounter)
