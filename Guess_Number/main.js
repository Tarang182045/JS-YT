let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;
const maxGuesses = 10;

let playGame = true;

remaining.textContent = maxGuesses;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
    return;
  }

  if (guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  if (numGuess >= maxGuesses) {
    displayMessage(`Game Over. Random number was ${randomNumber}`);
    endGame();
    return;
  }

  prevGuess.push(guess);
  displayGuess(guess);
  checkGuess(guess);
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('🎉 You guessed it right!');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('📉 Number is TOO low');
  } else {
    displayMessage('📈 Number is TOO high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.textContent = maxGuesses - numGuess;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');

  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);

  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 0;

    guessSlot.innerHTML = '';
    remaining.textContent = maxGuesses;
    lowOrHi.innerHTML = '';

    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');

    startOver.removeChild(p);
    playGame = true;
  });
}
