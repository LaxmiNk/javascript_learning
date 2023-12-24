const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");
buttons.forEach((button) => {
  //   button.setAttribute(
  //     `style`,
  //     `backgraound-color:${button.getAttribute("id")}`
  //   );     not working
  button.style.backgroundColor = button.id;
});
body.style.backgroundColor = "yellow";
buttons.forEach((button) => {
  button.addEventListener(`click`, (event) => {
    console.log(event);
    console.log(event.target);
    // if (event.target.id === `grey`) {
    //   body.style.backgroundColor = event.target.id;
    // }
    switch (`${event.target.id}`) {
      case `grey`:
        body.style.backgroundColor = event.target.id;
        break;
      case `white`:
        body.style.backgroundColor = event.target.id;
        break;
      case `green`:
        body.style.backgroundColor = event.target.id;
        break;
      case `red`:
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});
