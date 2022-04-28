let selection = ["rock", "paper", "scissors"];

function computerSelection() {
  return selection[Math.floor(Math.random() * selection.length)];
}

const buttonRock = document.getElementById("#btn-rock");
const buttonPaper = document.getElementById("#btn-paper");
const buttonScissors = document.getElementById("#btn-scissors");

function playRock() {
  console.log(selection[0]);
}
function playPaper() {
  return selection[1];
}
function playScissors() {
  return selection[2];
}

document.getElementById("#btn-rock").addEventListener("click", playRock);
