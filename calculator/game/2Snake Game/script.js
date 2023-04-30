// Game constants and variables
const board = document.querySelector('#board');
const scoreDisplay = document.querySelector('#score');
const startButton = document.querySelector('#start-button');
const width = 10;
let score = 0;
let snake = [2, 1, 0];
let direction = 1;
let intervalTime = 1000;
let intervalId = 0;
let foodIndex = 0;
let isRunning = false;

// Game functions
function createBoard() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.appendChild(square);
  }
}

createBoard();
function startGame() {
  isRunning = true;
  score = 0;
  scoreDisplay.textContent = score;
  direction = 1;
  clearInterval(intervalId);
  snake.forEach(index => document.getElementById(index).classList.remove('snake'));
  snake = [2, 1, 0];
  snake.forEach(index => document.getElementById(index).classList.add('snake'));
  generateFood();
  intervalTime = 1000;
  intervalId = setInterval(move, intervalTime);
}

function move() {
  if (checkCollision()) {
    alert('Game Over!');
    isRunning = false;
    clearInterval(intervalId);
    return;
  }

  const tail = snake.pop();
  document.getElementById(tail).classList.remove('snake');
  snake.unshift(snake[0] + direction);
  document.getElementById
}