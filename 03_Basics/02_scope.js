var c = 300  // but still 30 will be output
let a = 100

if(true){
    let a =10
    const b = 20      // its called block scope and outside it called global scope 
    var c = 30
    // console.log("Inner :",a)

}

// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "Tarang"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)          //its out of its scope so it will  give error
    two()
}
// one()


if(true){
    const username = "Tarang"
    if(username==="Tarang"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website)        // again it will give error because of scope 
}
// console.log(username)


console.log(addone(5))

function addone(num){
    return num + 1
}

// addone(5)        // u can't run this here u have to run this above function


console.log(addtwo(5))  // it will throgh an error because addtwo function is inside variable thats why
const addtwo = function(num){
    return num + 2
}
// addtwo(5)             // 


















