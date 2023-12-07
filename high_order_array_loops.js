const map = new Map();
//like hashmap in java
map.set("hii", "ji");
map.set("IN", "India");
map.set("US", "America");
// console.log(map.get("hii"));
for (const [key, value] of map) {
  //   console.log(key, " :- ", value);
}

//forin loop
for (const key in map) {
  console.log(key);
}

const myObj = {
  game1: "pubji",
  game2: "freefire",
  game3: "loodo",
};
// console.log(myObj);
// for (const key of myObj) {
//   console.log(key);
// }

//foreach loop in array

const programing = ["java", "javascript", "c++", "python"];
// programing.forEach(function (item) {
//   console.log(item);
// });

// programing.forEach((item) => {
//   console.log(item);
// });

function printme(item) {
  console.log(item);
}
// programing.forEach(printme);
// programing.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const mycoding = [
  {
    name: "laxminarayan",
    lastname: "kashyap",
    age: 19,
  },
  {
    name: "shubham",
    lastname: "kashyap",
    age: 19,
  },
  {
    name: "narayan",
    lastname: "kashyap",
    age: 19,
  },
  {
    name: "yogit",
    lastname: "kashyap",
    age: 19,
  },
];
// mycoding.forEach((item) => {
//   console.log(item.name);
// });

const values = mycoding.forEach((item) => {
  //   console.log(item);
});
// values();
console.log(values);
