// const promiseone = new Promise (function(resolve , reject){
//     // do any async task
//     //DB class , cryptography , network

//     setTimeout(function(){
//         console.log('Async task is completed')
//         resolve()
//     },1000)
// })

// promiseone.then(function(){
//     console.log("Promise consumed")
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })


// const promiseThree = new Promise (function(resolve , reject){
//     setTimeout(function(){
//         resolve({username : "Tarang" , email:"tarang@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)

// })

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true  // false output will change
        if(!error) {
            resolve({username: "Tarang" , password: "123"})

        }else {
            reject('Error: Something went wrong')
        }
    })
})


promisefour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected")) // it will print every time 


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});






