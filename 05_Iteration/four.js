/// for in

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
    
// }

const myObjects = {
    js: "Java script",
    cpp:"C++",
    rb:"Ruby",
    swift:"swift by apple"
}
for(const key in myObjects){
    // console.log(`${key} shortcut is for ${myObjects[key]}`)
}


/// for in loop in array

const programming = ["Java","Py","C++","Cpp"]

for (const key in programming) {
    // console.log(programming[key])
}


const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('UK', "United Kingdom")
map.set('IN', "India")

for(const key in map){
    console.log(key) /// the output is empty bcs map is not itrable we will see how we can itrate it further lectures
}

