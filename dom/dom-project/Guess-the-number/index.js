let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#submit");
const userInput = document.getElementById("input");
const previous = document.getElementById("previous");
const remaining = document.getElementById("remaining");
const results = document.querySelector("#results");
const loworHigh = document.getElementById(`lowOrHigh`);
// const startOver = document.querySelector(`#startOver`);
let p = document.createElement("p");
p.id = `newGame`;
let prevguesses = [];
let play = true;
let numGuesses = 0;
if (play) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuesses(guess);
  });
}

function validateGuesses(guess) {
  if (isNaN(guess)) {
    alert(`please enter a valid number`);
  } else if (guess < 1) {
    alert(`please enter a  number greater than 1 `);
  } else if (guess > 100) {
    alert(`please enter a  number less than 100`);
  } else {
    prevguesses.push(guess);
    if (numGuesses === 10) {
      displayGuess(guess);
      displayMessage(`game over , Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuesses(guess);
    }
  }
}

function checkGuesses(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO High`);
  }
}

function displayGuess(guess) {
  //cleanup gusses
  userInput.value = "";
  previous.innerHTML += ` ${guess}`;
  numGuesses++;
  remaining.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message) {
  loworHigh.innerHTML = `<h2> ${message}</h2>`;
}

function endGame() {
  userInput.value = ``;
  userInput.toggleAttribute(`disabled`, true);
  submit.toggleAttribute(`disabled`, true);
  p.classList.add(`button`);
  p.innerHTML = `<h2>start a new game</h2>`;
  results.appendChild(p);
  play = false;
  newGame();
}

function newGame() {
  const newGameButton = document.getElementById(`newGame`);
  newGameButton.addEventListener(`click`, function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguesses = [];
    numGuesses = 0;
    remaining.innerHTML = `${10 - numGuesses}`;
    previous.innerHTML = "";
    loworHigh.innerHTML = "";
    userInput.toggleAttribute(`disabled`, false);
    submit.toggleAttribute(`disabled`, false);

    results.removeChild(p);
    play = true;
  });
}
