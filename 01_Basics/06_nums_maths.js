const score=400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString()) // now its in string so we can apply string method like length etc
// console.log(balance.toFixed(2)) // give 2 decimal precision

const number=123.789124
// console.log(number.toPrecision(4))

const hundres = 1000000
// console.log(hundres.toLocaleString('en-IN'))



/*  ********     MATH        *******/

console.log(Math.abs(-4))
console.log(Math.round(4.6))

console.log(Math.random())
console.log((Math.random()*10) + 1)


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)