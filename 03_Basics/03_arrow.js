 const user = {
    username:"Tarang",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`)    // this. refer to current context inside the {}
        // console.log(this)
    }
 }
//  user.welcomeMessage()
//  user.username =  "sam"
//  user.welcomeMessage()
//  console.log(this)

// function chai(){
//     let username = "tarang"
//     console.log(this)       // here this.username won't work bcs its only work on object not in function
// }
// chai()


// const chai = function(){
//      let username = "tarang"
//     console.log(this.username) // it will still through an error for this.username
// }  
// chai()


const chai = () => {
     let username = "tarang"
    console.log(this)         // this is called arrow function and output is  this {}
}
//chai()




// const addtwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addtwo(1,1))


// const addtwo = (num1 , num2) => ( num1 + num2 )      /// other methods of arrow function
const addtwo = (num1 , num2) => ({username:"Tarang"})  //for object return  () must 
console.log(addtwo(1,2))



