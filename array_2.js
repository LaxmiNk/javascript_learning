const arr1 = [1, 2, 3, 4];
const arr2 = [`hii`, `ji`, `kaise`, `ho`];
// arr1.push(arr2);
// console.log(arr1);
// const all = arr1.concat(arr2);
// all = [...arr1, ...arr2];
// console.log(all);
let newArr = [1, 2, 3, [5, 6], [8, 0, 9, [3, 4, 6]]];
let plainArray = newArr.flat(Infinity);
console.log(plainArray);
let name = `Laxminarayan`;
console.log(Array.isArray(name));
console.log(Array.from(name));
let obj = {
  name: `rohan`,
  age: 23,
};
// console.log(Array.of({ name: `hitesh` }));
console.log(Array.from(obj));
