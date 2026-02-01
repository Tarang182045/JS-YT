// premitive 
/* 7 types: String,Number, Boolean,null,undefined,Symbol,BIg int */



const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber=127498620524866467n //bigint represenatiion



// not premitive(refrence)
/* Array,objects,Functions*/

const heros =["Shaktimann","Thor","Doga"]  //array
let myobj= {          // obj inside {}
    name:"Tarang",
    age:21,
}



//*********************** *//
//stack (primitive) and heap (non-primtive)

let MyYoutubename = "Tarangtank.com"
let othername = MyYoutubename
othername="Tanktarang"

console.log(MyYoutubename)      // here its give direct copy of data not its refrence value in stack
console.log(othername)

let userOne = {
    email:"123@gmail.com",
    upi:"abc@ybl"
}
                          //here memory store in heap where its give direct refrence not its copy
let userTwo = userOne
userTwo.email="Tarang@gppgle.com"

console.log(userOne.email)  
console.log(userTwo.email)
