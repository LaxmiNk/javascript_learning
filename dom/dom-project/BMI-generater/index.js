const form = document.querySelector("form");
// this will give you empty
// const weight = getElementById("weight").innerText;
// const height = getElementById("height").innerText;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  calculate();
});

function calculate() {
  // e.preventDefault();
  const weight = parseInt(document.getElementById("weight").value);
  console.log(`weight ${weight}`);
  // e.preventDefault();
  const height = parseInt(document.getElementById("height").value);
  console.log(`height ${height}`);
  const result = document.getElementById("result");
  if (!height || height < 0) {
    result.innerHtml = "please give a valid height";
    return;
  } else if (!weight || weight < 0) {
    result.innerHtml = "please give a valid height";
    return;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result

    console.log(`result ${result}`);
    // result.textContent = `${bmi}`;
    if (bmi < 18.5) {
      result.innerText = ` Underweight  ${bmi}`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerText = ` Normal  ${bmi}`;
    } else {
      result.innerText = ` Overweight  ${bmi}`;
    }
  }
}
const clock = document.getElementsByClassName(`clock`); // this will give html collection
setInterval(function () {
  const date = new Date();
  clock[0].innerText = date.toLocaleTimeString();
}, 1000);
