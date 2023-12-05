//singleton object

//object literals
const mySim = Symbol("key1");
let person = {
  name: `laxminarayan`,
  "full name": "Laxminarayan Kashyap",
  age: 18,
  [mySim]: "mykey",
  email: "laxmi@gmail.com",
  location: "Bilaspur",
  isloggedin: false,
  lastLoginDay: ["Monday", "Tusday"],
};
// Object.freeze(person);
person.email = "Narayan@gmail.com";
person.greating = function () {
  console.log("hello , person goodmornig");
};
person.greatingTwo = function () {
  console.log(`hello , ${this["full name"]} goodmornig`);
};
console.log(person.greating());
console.log(person.greatingTwo());
