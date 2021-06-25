// 1) *Show things when user open the page
// 2) disable Rock, Paper, Scissor button until user click on play button
// 3) When user click on play button, enable the rock, papper, scissor buttons
// 4) You can select computer's item on the same click
// 5) once user select something, match and show the result

let userScore = 0;
let computerScore = 0;
let Rock_Choice = document.getElementById('rock');
let Paper_Choice = document.getElementById('paper');
let Scissor_Choice = document.getElementById('scissor');
let user_Choice = document.querySelector('.uselectedimg');
let computer_Choice = document.querySelector('.cselectedimg');
let play_Choice = document.querySelector('.play_button');
let msg_Result = document.querySelector('msg');
const userScore_ui = document.querySelector('.user_score');
const computerScore_ui = document.querySelector('.computer_score');
const play_BTN = document.querySelector('.play_button');
play_BTN.clicked = true;

let message = {
  computerwin: 'Computer Wins!!!',
  userwin: 'Congratulations!!!! You are Winner',
  tie: 'Its a tie',
};
let choices = {
  rock: '⛰️',
  paper: '📃',
  scissor: '✂️',
};

let compChoice = ['rock', 'paper', 'scissor'];
// let userChoice = [rock, paper, scissor];

Rock_Choice.textContent = choices.rock;
Paper_Choice.textContent = choices.paper;
Scissor_Choice.textContent = choices.scissor;

/*computer random choice for game*/

play_BTN.addEventListener('click', function () {
  if (play_BTN.clicked === true) {
    Rock_Choice.addEventListener('click', function () {
      game('rock');
      user_Choice.textContent = choices.rock;
    });

    Paper_Choice.addEventListener('click', function () {
      game('paper');
      user_Choice.textContent = choices.paper;
    });

    Scissor_Choice.addEventListener('click', function () {
      game('scissor');
      user_Choice.textContent = choices.scissor;
    });

    function game(userChoice) {
      let computerChoice = getComputerChoice();
      if (computerChoice === 'rock') {
        computer_Choice.textContent = choices.rock;
      } else if (computerChoice === 'paper') {
        computer_Choice.textContent = choices.paper;
      } else {
        computer_Choice.textContent = choices.scissor;
      }
      //  return userChoice;

      // console.log( userChoice);
      // console.log( computerChoice);
      winner();
    }

    // winner();
  } else {
    Rock_Choice.removeEventListener('click', () => game('rock'));
    Paper_Choice.removeEventListener('click', () => game('paper'));
    Scissor_Choice.removeEventListener('click', () => game('scissor'));
  }
});

function getComputerChoice() {
  let choiceNumber = Math.floor(Math.random() * 3);
  let secretChoice = compChoice[choiceNumber];
  return secretChoice;
}

winner = function () {
  if (userChoice === computerChoice) {
    msg_Result.textContent = message.tie;
  }
  if (userChoice !== computerChoice) {
    if (userChoice === 'rock' && computerChoice === 'paper') {
      computerScore++;
      computerScore_ui.textContent = computerScore;
      msg_Result.textContent = message.computerwin;
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      userScore++;
      userScore_ui.textContent = userScore;
      msg_Result.textContent = message.userwin;
    }

    if (userChoice === 'rock' && computerChoice === 'scissor') {
      userScore++;
      userScore_ui.textContent = userScore;
      msg_Result.textContent = message.userwin;
    } else if (userChoice === 'scissor' && computerChoice === 'rock') {
      computerScore++;
      computerScore_ui.textContent = computerScore;
      msg_Result.textContent = message.computerwin;
    }

    if (userChoice === 'paper' && computerChoice === 'scissor') {
      computerScore++;
      computerScore_ui.textContent = computerScore;
      msg_Result.textContent = message.computerwin;
    } else if (userChoice === 'scissor' && computerChoice === 'paper') {
      userScore++;
      userScore_ui.tinnerText = userScore;
      msg_Result.textContent = message.userwin;
    }
  }
};
