// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammya";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Laxminarayan",
      lastname: "kashyap",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 2: "c", 4: "d" };
// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// console.log(obj1);

const users = [
  {
    id: 1,
    email: "laxmi@gmail.com",
  },
];
users[0].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLogged"));

const course = {
  name: "js in hindi",
  price: 5900,
  courseInstructor: "laxminarayan",
};
// course.courseInstructor
const { courseInstructor: instructor } = course;
console.log(instructor);

// {
//   "name":"laxminarayan",
//   "courseName" : "js in hindi",
//  "price":"free"

// }
