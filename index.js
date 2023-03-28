const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

//Checks options and determines result for each button click
choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `You: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

//Selects random from three options
function computerTurn(){
    const randomOption = Math.floor(Math.random() * 3) + 1;

    switch(randomOption){
      case 1:
        computer = "rock";
        break;
      case 2:
        computer = "paper";
        break;
      case 3:
        computer = "scissors";
        break;
    }
}

//Checks results of game and determines a winner or a draw
function checkWinner(){
    if(player == computer){
      return "It's a draw!";
    }
    else if(computer == "rock"){
      return (player == "paper") ? "You Win!" : "You Lose!"
    }
    else if(computer == "paper"){
      return (player == "scissors") ? "You Win!" : "You Lose!"
    }
    else if(computer == "scissors"){
      return (player == "rock") ? "You Win!" : "You Lose!"
    }
}