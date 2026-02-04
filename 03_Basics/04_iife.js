//immediately invoked function  expression (IIFE)

(function chai (){
    console.log('DB connected')  // from global scope pollution we can save bu this iife
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ("Tarang")     // before using second time iife we need to put ; semicoloan on before function then u can use this where u dont need to define any function 


//first one is nammed iffe because of function used chai and second one is unnammed because we didnt use any name

