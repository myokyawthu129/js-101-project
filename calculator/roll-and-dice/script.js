const rollButton = document.getElementById('roll-button');
const resultMessage = document.getElementById('result-message');

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  resultMessage.innerText = `You rolled a ${randomNumber}!`;
}

rollButton.addEventListener('click', rollDice);
