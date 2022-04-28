let selection = ["rock", "paper", "scissors"];
//Generates computer's selection
function computerSelection() {
  return selection[Math.floor(Math.random() * selection.length)];
}

const buttonRock = document.getElementById("#btn-rock");
const buttonPaper = document.getElementById("#btn-paper");
const buttonScissors = document.getElementById("#btn-scissors");
//Event listeners for player buttons
document.getElementById("btn-rock").addEventListener("click", playRock);
document.getElementById("btn-paper").addEventListener("click", playPaper);
document.getElementById("btn-scissors").addEventListener("click", playScissors);

//Player button functions
function playRock() {
  let playerSelection = selection[0];
  return playerSelection;
}
function playPaper() {
  let playerSelection = selection[1];
  return playerSelection;
}
function playScissors() {
  let playerSelection = selection[2];
  return playerSelection;
}
