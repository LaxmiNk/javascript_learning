const user = {
  username: "laxminarayan",
  price: 499,
  message: function () {
    console.log(this);
    console.log(`${this.username} welcome to this course`);
  },
};
// user.message();
// user.username = "sam";
// user.message();
// console.log(this);

// function chai() {
//     let username = "laxminarayan"
//   console.log(this);
// }

const chai = () => {
  let username = "laxminarayan";
  console.log(this);
};
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({
  username: "laxminarayan",
});
console.log(addTwo(4, 2));
