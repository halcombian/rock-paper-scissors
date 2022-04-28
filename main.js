let selection = ["rock", "paper", "scissors"];

function computerSelection() {
  return selection[Math.floor(Math.random() * selection.length)];
}
