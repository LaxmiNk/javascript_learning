function sayMessage(userName) {
  if (userName === undefined) {
    // return `${userName} logged in`;
    return;
  }
  return `${userName}  just logged in`;
}
// console.log(sayMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(3, 400, 300, 200));

const user = {
  username: "laxmnarayan",
  price: 399,
};
function handleObject(anyObject) {
  console.log(
    `User name is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// handleObject(user);
handleObject({
  username: "same",
  price: 389,
});

const myNewArray = [200, 300, 400, 500];
function returnSecondValue(anyArray) {
  return anyArray[1];
}
console.log(returnSecondValue(myNewArray));
