//Buttons
const player1But = document.querySelector('#playerOne');
const player2But = document.querySelector('#playerTwo');
const playerResetBut = document.querySelector('#reset');

//player scores display text
const player1Score = document.querySelector('#pOneScore');
const player2Score = document.querySelector('#pTwoScore');

//Score Selector and Holder
let scoreSet = 5;
let playerOneScore = 0;
let playerTwoScore = 0;
const scoreSelector = document.querySelector('#playAmount');

//button actions
player1But.addEventListener('click', function (e) {
  //update player 1 score
  playerOneScore++;
  player1Score.innerHTML = playerOneScore;
  anyoneWin();
});

player2But.addEventListener('click', function (e) {
  //update player 2 score
  playerTwoScore++;
  player2Score.innerHTML = playerTwoScore;
  anyoneWin();
});

playerResetBut.addEventListener('click', (e) => {
  resetEverything();
});

//selector action
scoreSelector.addEventListener('change', (e) => {
  resetScore();
  scoreSet = Number.parseInt(e.target.value);
});

//reset functions
function resetEverything() {
  playerOneScore = 0;
  playerTwoScore = 0;
  scoreSet = 5;
  scoreSelector.value = '5';
  player1Score.innerHTML = playerOneScore;
  player2Score.innerHTML = playerTwoScore;
  anyoneWin();
  activateCountButtons();
}

function resetScore() {
  playerOneScore = 0;
  playerTwoScore = 0;
  player1Score.innerHTML = playerOneScore;
  player2Score.innerHTML = playerTwoScore;
  anyoneWin();
}

//win check function
function anyoneWin() {
  if (playerOneScore === scoreSet) {
    player1Score.classList.add('won');
    player2Score.classList.add('lost');
    disableCountButtons();
  } else if (playerTwoScore === scoreSet) {
    player1Score.classList.add('lost');
    player2Score.classList.add('won');
    disableCountButtons();
  } else {
    player1Score.classList.remove('lost');
    player2Score.classList.remove('won');
    player1Score.classList.remove('won');
    player2Score.classList.remove('lost');
  }
}

//disable player 1 & 2 buttons
function disableCountButtons() {
  player1But.setAttribute('disabled', true);
  player2But.setAttribute('disabled', true);
  scoreSelector.setAttribute('disabled', true);
}

//activate player 1 & 2 buttons
function activateCountButtons() {
  player1But.removeAttribute('disabled');
  player2But.removeAttribute('disabled');
  scoreSelector.removeAttribute('disabled');
}
