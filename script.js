const CHOICE = ["Rock", "Paper", "Scissors"];
function computerPlay() {
return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

String.prototype.standardize = function () {
if (this.length > 1)
    return this.substr(0, 1).toUpperCase() + this.substr(1, this.length - 1).toLowerCase(); 
}

function playRound(playerSelection, computerSelection) {
let state = "";
let winner = "";
let loser = "";
playerSelection = playerSelection.standardize();
if (   playerSelection == "Paper" && computerSelection == "Rock"
    || playerSelection == "Rock" && computerSelection == "Scissors"
    || playerSelection == "Scissors" && computerSelection == "Paper") {
    state = "Win";
    winner = playerSelection;
    loser = computerSelection;
}
else if (   playerSelection == "Paper" && computerSelection == "Scissors"
        ||  playerSelection == "Rock" && computerSelection == "Paper"
        ||  playerSelection == "Scissors" && computerSelection == "Rock") {
    state = "Lose";
    winner = computerSelection;
    loser = playerSelection;
}
else {
    state = "Draw";
}
return state == "Draw" ? "Draw!" : `You ${state}! ${winner} beats ${loser}`;
}

function game() {
let computerSelection = "";
for (let _ = 0; _ < 5; _++) {
    let playerSelection = "";
    while (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
    playerSelection = prompt("Enter your choice: ").standardize();
    }
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}
}