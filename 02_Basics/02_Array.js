const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][1])


const all_heros = marvel.concat(dc)
// console.log(all_heros)

const allheros = [...marvel, ...dc] // its spread operator u can add more things combine but in conact only 2 can
// console.log(allheros)


const mix_array = [1,2,3,[4,5],6,[7,[8,9]]]
const all_array = mix_array.flat(Infinity)
console.log(all_array)         // u can put how deapth u want to solve array


console.log(Array.isArray("Tarang"))
console.log(Array.from("Tarang"))

console.log(Array.from({name:"Tarang"}))  // intresting case give empty array cant convert value and key like name and its value


const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3))



