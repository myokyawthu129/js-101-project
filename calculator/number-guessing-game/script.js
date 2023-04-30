const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resultMessage = document.getElementById('result-message');

const randomNumber = Math.floor(Math.random() * 100) + 1;

function guessNumber() {
  const guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    resultMessage.innerText = 'Please enter a valid number between 1 and 100.';
  } else if (guess < randomNumber) {
    resultMessage.innerText = 'Too low, try again!';
  } else if (guess > randomNumber) {
    resultMessage.innerText = 'Too high, try again!';
  } else {
    resultMessage.innerText = 'Congratulations, you guessed the number!';
  }
  guessInput.value = '';
}

guessButton.addEventListener('click', guessNumber);
guessInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    guessNumber();
  }
});
