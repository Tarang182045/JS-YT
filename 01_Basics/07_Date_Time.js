let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)

let CreatemyDate = new Date(2026,1,1)
// let createMyDate = new Date(2026,1,20,4,5)
// let createmyDate = new Date("2026,1,24")
// console.log(createMyDate.toLocaleString())


// let myTimeStamp = Date.now()
// console.log(myTimeStamp) // in mili sec
// console.log(CreatemyDate.getTime())
// console.log(Math.floor(Date.now()/1000))  //its in sec

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())

newDate.toLocaleDateString('Default',{
    weekday: "long",
})

