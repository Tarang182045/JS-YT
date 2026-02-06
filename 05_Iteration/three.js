/// for in

// for (const element of object) {
    
// }
const arr = [1,2,3,4,5,6]
for(const num of arr){
    // console.log(num)
}


const greetings = "Hello World!"
for (const greet of greetings){
    // console.log(`each char is ${greet}`)
}

/// MAPS

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('UK', "United Kingdom")
map.set('IN', "India")

// console.log(map)    // map.set giev output in order and non duplicate items only

for (const [key , value] of map){
    // console.log(key, ":-" , value)
}


const myObjects = {
    game1 : 'NFS',
    game2 : 'KNS'
}
for (const [key,value] of myObjects){
    // console.log(key,":-",value)       // this will throgh an error of myObjects is not iterable
}


