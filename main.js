let userScore = 0;
let computerScore = 0;
const elements = ['rock', 'paper', 'scissor'];
const emoji = {
  rock: '🪨',
  paper: '📜',
  scissor: '✂️',
};

const message = {
  start: 'Select an element',
  tie: "🤷🏻‍♂️ It's a tie",
  userWin: '🥳 Hoory!! You Win.',
  computerWin: '🤖 Computer Win!!',
};

let computerSelect;
let userSelect;

const selectUserScore = document.querySelector('.user_score');
const selectComputerScore = document.querySelector('.computer_score');
const selectRock = document.querySelector('#rock');
const selectPaper = document.querySelector('#paper');
const selectScissor = document.querySelector('#scissor');
const selectMessage = document.querySelector('.msg');
const selectResetBtn = document.querySelector('.reset_button');
const selectPlayBtn = document.querySelector('.play_button');
const selectUserEmoji = document.querySelector('.uselectedimg');
const selectComputerEmoji = document.querySelector('.cselectedimg');

selectResetBtn.style.display = 'none';

//Function to enable / disable Rock, paper, scissor elements
const displayElements = (opt) => {
  selectRock.disabled = opt;
  selectPaper.disabled = opt;
  selectScissor.disabled = opt;
};

displayElements(true);

selectUserScore.textContent = userScore;
selectComputerScore.textContent = computerScore;
selectRock.textContent = emoji.rock;
selectPaper.textContent = emoji.paper;
selectScissor.textContent = emoji.scissor;
selectMessage.textContent = message.start;

selectPlayBtn.addEventListener('click', () => {
  selectMessage.textContent = message.start;
  computerSelect = Math.trunc(Math.random() * 3);
  displayElements(false);
  selectPlayBtn.style.display = 'none';
  selectResetBtn.style.display = 'block';
});

selectRock.addEventListener('click', () => {
  userSelect = 0;
  finalResult();
});
selectPaper.addEventListener('click', () => {
  userSelect = 1;
  finalResult();
});
selectScissor.addEventListener('click', () => {
  userSelect = 2;
  finalResult();
});

const finalResult = () => {
  let userNum = elements[userSelect];
  let compNum = elements[computerSelect];
  selectUserEmoji.textContent = emoji[userNum];
  selectComputerEmoji.textContent = emoji[compNum];
  displayElements(true);

  if (userSelect === computerSelect) {
    selectMessage.textContent = message.tie;
  } else if (userSelect === 0 && computerSelect === 1) {
    computerScore += 1;
    selectMessage.textContent = message.computerWin;
  } else if (userSelect === 1 && computerSelect === 0) {
    userScore += 1;
    selectMessage.textContent = message.userWin;
  } else if (userSelect === 1 && computerSelect === 2) {
    computerScore += 1;
    selectMessage.textContent = message.computerWin;
  } else if (userSelect === 2 && computerSelect === 1) {
    userScore += 1;
    selectMessage.textContent = message.userWin;
  } else if (userSelect === 0 && computerSelect === 2) {
    userScore += 1;
    selectMessage.textContent = message.userWin;
  } else if (userSelect === 2 && computerSelect === 0) {
    computerScore += 1;
    selectMessage.textContent = message.computerWin;
  }

  selectPlayBtn.style.display = 'block';
  selectResetBtn.style.display = 'none';

  selectUserScore.textContent = userScore;
  selectComputerScore.textContent = computerScore;
};

selectResetBtn.addEventListener('click', () => {
  selectMessage.textContent = message.start;
  displayElements(true);
  selectPlayBtn.style.display = 'block';
  selectResetBtn.style.display = 'none';
});
