/// for each

const programming = ["Java","Py","C++","Cpp"]
programming.forEach( function (items) {
    // console.log(items)
} )

function printMe(items){
    console.log(items)
}
// programming.forEach(printMe)


// programming.forEach( (items , index , arr)=> {        // foreach don't only have items but index and arr also
//     console.log(items,index,arr)
// } )



const myCoding = [
    {
        language : "Javascript",
        languageFilename  : "js"
    },
    {
        language : "Java",
        languageFilename  : "java"
    },
    {
        language : "python",
        languageFilename  : "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.language)
    console.log(item.languageFilename)

} )


