//your code here
// JavaScript code for the Rock Paper Scissors game

const gameNumberInput = document.getElementById('game-number');
const playButton = document.getElementById('play-game');
const roundsLeftElement = document.querySelector('[data-ns-test="rounds-left"]');
const userPointsElement = document.querySelector('[data-ns-test="user-points"]');
const computerPointsElement = document.querySelector('[data-ns-test="computer-points"]');
const roundResultElement = document.querySelector('[data-ns-test="round-result"]');
const computerChooseElement = document.querySelector('[data-ns-test="computer-choose"]');
const gameResultElement = document.querySelector('[data-ns-test="game-result"]');
const rockButton = document.querySelector('[data-ns-test="rock"]');
const paperButton = document.querySelector('[data-ns-test="paper"]');
const scissorsButton = document.querySelector('[data-ns-test="scissors"]');

let turnsLeft = 0;
let userPoints = 0;
let computerPoints = 0;

playButton.addEventListener('click', startGame);

function startGame() {
  turnsLeft = parseInt(gameNumberInput.value);

  if (isNaN(turnsLeft) || turnsLeft <= 0) {
    alert('Please enter a valid number of turns.');
    return;
  }

  userPoints = 0;
  computerPoints = 0;
  updateUI();

  rockButton.addEventListener('click', () => playRound('ROCK'));
  paperButton.addEventListener('click', () => playRound('PAPER'));
  scissorsButton.addEventListener('click', () => playRound('SCISSORS'));
}

function playRound(userChoice) {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (userChoice === computerChoice) {
    roundResultElement.textContent = 'TIE';
  } else if (
    (userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
    (userChoice === 'PAPER' && computerChoice === 'ROCK') ||
    (userChoice === 'SCISSORS' && computerChoice === 'PAPER')
  ) {
    roundResultElement.textContent = 'WON';
    userPoints++;
  } else {
    roundResultElement.textContent = 'LOSE';
    computerPoints++;
  }

  turnsLeft--;

  computerChooseElement.textContent = `Computer Chooses: ${computerChoice}`;
  updateUI();

  if (turnsLeft === 0) {
    endGame();
  }
}

function updateUI() {
  roundsLeftElement.textContent = `Rounds Left: ${turnsLeft}`;
  userPointsElement.textContent = `User Points: ${userPoints}`;
  computerPointsElement.textContent = `Computer Points: ${computerPoints}`;
}

function endGame() {
  if (userPoints === computerPoints) {
    gameResultElement.textContent = 'TIE';
  } else if (userPoints > computerPoints) {
    gameResultElement.textContent = 'WON';
  } else {
    gameResultElement.textContent = 'LOSE';
  }

  rockButton.removeEventListener('click', () => playRound('ROCK'));
  paperButton.removeEventListener('click', () => playRound('PAPER'));
  scissorsButton.removeEventListener('click', () => playRound('SCISSORS'));
}

