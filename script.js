const CHOICE = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function playRound(playerSelection, computerSelection) {
    if (   playerSelection == "Paper" && computerSelection == "Rock"
        || playerSelection == "Rock" && computerSelection == "Scissors"
        || playerSelection == "Scissors" && computerSelection == "Paper") {
        return "Win";
    }
    else if (   playerSelection == "Paper" && computerSelection == "Scissors"
            ||  playerSelection == "Rock" && computerSelection == "Paper"
            ||  playerSelection == "Scissors" && computerSelection == "Rock") {
        return "Lose";
    }
    else {
        return "Draw";
    }
}

function resetAll() {
    setTimeout(() => {
        final.style.display = "none";
        score = 0;
        playerChoice = "";
        computerChoice = "";
        scoreHTML.innerHTML = 0;
        playerShow.innerHTML = `<img class="flyingfromleft" src="300_8.png">`;
        computerShow.innerHTML = `<img class="flyingfromright" src="300_1.png">`;
        if (!choicesHTML.classList.contains("highlight"))
            choicesHTML.classList.add("highlight");
    }, 5000);
}

function toggleClass(e) {
    e.classList.toggle("congrats");
}

function handler(e) {
    let playerChoice = e.target.getAttribute("data-choice");
    let computerChoice = computerPlay();
    setTimeout(() => choicesHTML.classList.remove("highlight"), 100);
    playerShow.innerHTML = `<img class="flyingfromleft" src="${playerChoice}.png">`;
    computerShow.innerHTML = `<img class="flyingfromright" src="${computerChoice}.png">`;
    let state = playRound(playerChoice, computerChoice);
    if (state == "Win") {
        toggleClass(playerName);
        scoreHTML.innerHTML = ++score;
        setTimeout(() => toggleClass(playerName), 700);
    }
    else if (state == "Draw") {
        toggleClass(playerName);
        setTimeout(() => toggleClass(playerName), 700);
        toggleClass(computerName);
        setTimeout(() => toggleClass(computerName), 700);
    }
    else {
        toggleClass(computerName);
        scoreHTML.innerHTML = --score;
        setTimeout(() => toggleClass(computerName), 700);
    }
    if (score == 5) {
        final.style.display = "flex";
        resetAll();
        scoreHTML.innerHTML = score;
    }
    if (score != 5)
        setTimeout(() => choicesHTML.classList.add("highlight"), 2000);
}


const scoreHTML = document.querySelector(".scoreChange");
const choicesHTML = document.querySelector(".choices");
const dataChoices = Array.from(document.querySelectorAll(".choices [data-choice]"));
const playerName = document.querySelector(".playerName");
const computerName = document.querySelector(".computerName");
const playerShow = document.querySelector(".playerChoice");
const computerShow = document.querySelector(".computerChoice");
const final = document.querySelector(".final");
const button = document.querySelector("button");

let score = 0
let playerChoice = "";
let computerChoice = "";

button.addEventListener("click",  () => setTimeout(() => {
    final.style.display = "none";
    score = 0;
    playerChoice = "";
    computerChoice = "";
    scoreHTML.innerHTML = 0;
    playerShow.innerHTML = `<img class="flyingfromleft" src="300_8.png">`;
    computerShow.innerHTML = `<img class="flyingfromright" src="300_1.png">`;
    choicesHTML.classList.add("highlight");;
}, 500));

choicesHTML.classList.add("highlight");
for (let _ = 0; _ < dataChoices.length; _++)
    dataChoices[_].addEventListener("click", handler);
