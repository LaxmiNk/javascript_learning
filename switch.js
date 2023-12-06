const month = 2;
switch (month) {
  case 1:
    console.log("january");
    break;
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;
  default:
    console.log("nothing");
    break;
}
// falsy value
// false,0,-0,BigInt 0n, "" , null,undifined,NaN

//truthy value
// "0", 'false'," " , [],{}, function(){};
const arr = [];
if (arr.length === 0) {
  console.log("array is empty");
}
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
// Nullish coalescing operator(??) : mull undifined
let val;
// val = 5 ?? 12;
// val = null ?? 19;
// val = undefined ?? 39;
val = null ?? 10 ?? 20;
// console.log(val);

// Ternary operator
// condition ? true : false
const iceTeaPrice = 120;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greaer than 80");
