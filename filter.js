const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNum.filter((num) => num > 4);
// const newNum = myNum.filter((num) => {
//   return num > 4;
// });
const newNum = [];
myNum.forEach((num) => {
  if (num > 4) {
    newNum.push(num);
  }
});
// console.log(newNum);

const books = [
  {
    tittle: "book one",
    gernre: "history",
    publish: 1978,
    addition: 2014,
  },
  {
    tittle: "book two",
    gernre: "history",
    publish: 1980,
    addition: 2012,
  },
  {
    tittle: "book three",
    gernre: "sience",
    publish: 1983,
    addition: 2028,
  },
  {
    tittle: "book four",
    gernre: "sience",
    publish: 1985,
    addition: 2021,
  },
  {
    tittle: "book five",
    gernre: "politics",
    publish: 1987,
    addition: 2009,
  },
  {
    tittle: "book six",
    gernre: "politics",
    publish: 1990,
    addition: 2013,
  },
  {
    tittle: "book seven",
    gernre: "language",
    publish: 1997,
    addition: 2022,
  },
];
let userbook = books.filter((bk) => {
  return bk.gernre === "sience";
});
userbook = books.filter((bk) => {
  return bk.addition >= 2015;
});
userbook = books.filter((bk) => {
  return bk.publish >= 1988;
});

console.log(userbook);
