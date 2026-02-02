// singleton

// object literals

const mysym = Symbol("key1")


const jsUser={
    name: "Tarang",
    "full name": "Tarang Tank", 
    age: 21,
    email: "Tarang@google.com",
    location: "Gujrat",
    isLoggedIn : false,
    [mysym] : "mykey1"

}

// console.log(jsUser.email)
// console.log(jsUser["email"])  // both way is correct but prefrable is this one
// console.log(jsUser["full name"])
// console.log(jsUser[mysym])  // if we cant use this [] then it will give string as type but actuslyy its symbol thats y ask in interviw 



// jsUser.email = "Tarang@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email="Tarang@microsoft.com"
// console.log(jsUser)

jsUser.greetings = function(){
    console.log("Hello Js User")
}

console.log(jsUser.greetings())

jsUser.greetingstwo = function(){
    console.log(`Hello JS user , ${this.name}`)
}
console.log(jsUser.greetingstwo())
