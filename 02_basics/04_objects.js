// const tinderUser = {} //Non singleton object
const tinderUser = new Object();
// console.log(tinderUser); //Both gives same o/p --> {}

tinderUser.id = "123abc"
tinderUser.name = "Dobber"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ashwini",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj4 = { 5: "a", 6: "b"}

// const obj3 = {obj1, obj2} //o/p-->{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)


const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

//When value comes from database
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    }
]

// console.log(users[1].email)


// Some more methods

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//++++++++++++Destructuring of Objects++++++++++++++++//

const course = {
    courname: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor
//Destructuring
// const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);


//JSON API CALLS
// {
//     "name": "ashwini",
//     "course": "computer Science"
// }