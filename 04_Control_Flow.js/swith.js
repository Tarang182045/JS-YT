// switch (key) {
//     case value:
//         break;
//     default:
//         break;

// }

const month = 3
switch(month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("March")          // if we comment out break then all the code will run from case 3 
        break;                        // where its match to last case but not default 
    case 4:
        console.log("April")
        break;
    default:
        console.log("Default case match")
        break;
}