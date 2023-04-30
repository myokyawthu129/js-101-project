const flipButton = document.getElementById('flip-button');
const coinHeads = document.querySelector('.coin-heads');
const coinTails = document.querySelector('.coin-tails');
const resultMessage = document.getElementById('result-message');

function flipCoin() {
  const randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 0) {
    coinHeads.style.display = 'block';
    coinTails.style.display = 'none';
    resultMessage.innerText = 'You flipped heads!';
  } else {
    coinHeads.style.display = 'none';
    coinTails.style.display = 'block';
    resultMessage.innerText = 'You flipped tails!';
  }
}

flipButton.addEventListener('click', flipCoin);
