const name="Tarang"
const RepoCount=50

//console.log(name + RepoCount +" Value")

console.log(`Hello my name is ${name} and my repocount is ${RepoCount}`) // modern style


const gameName = new String("San Mario")  // by console u see more feature

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('M'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,8)
console.log(anotherString)

const newStringone = "       Tarang     "
console.log(newStringone)
console.log(newStringone.trim())


const url = "https://tarangtank.com/tarang%20tank"
console.log(url.replace('%20','_'))

console.log(gameName.split(' '))