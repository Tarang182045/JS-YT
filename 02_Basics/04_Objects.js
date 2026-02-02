const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const realUser ={
    email: "tarang@google.com",
    fullname: {
        userfullname: {
            firstName: "Tarang",
            lastName: " Tank"
        }

    }

}
// console.log(realUser.fullname.userfullname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = Object.assign(obj1,obj2)         //all have same output
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3)


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


const course = {
  courseName: "JS in hindi",
  price: "999",
  courseInstructor: "Tarang"
}

const { courseInstructor: instructor } = course
// console.log(courseInstructor)
console.log(instructor)




