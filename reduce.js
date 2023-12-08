const myNum = [1, 2, 3, 4, 5];
// const myTotle = myNum.reduce(function (acc, curr) {
//   console.log(`acc ${acc} and cuur is ${curr}`);
//   return acc + curr;
// }, 0);
const myTotle = myNum.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotle);
const course = [
  {
    itemName: "python",
    price: 299,
  },
  {
    itemName: "c++",
    price: 499,
  },
  {
    itemName: "javascript",
    price: 399,
  },
  {
    itemName: "rubi",
    price: 899,
  },
];

const totle = course.reduce((acc, item) => acc + item.price, 0);
console.log(totle);
