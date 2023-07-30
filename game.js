function getComputerChoice() {
    // Generate a number from 0-2
    let randomNum = Math.floor(Math.random() * 3);
    let choice;

    switch (randomNum) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }

    return choice;
}

function capitalize(string) {
    string = string.toLowerCase();
    const FIRST_INDEX = 0;
    const SECOND_INDEX = 1;

    let capitalizedString = string.charAt(FIRST_INDEX).toUpperCase() + "" + string.substring(SECOND_INDEX);
    return capitalizedString;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let winner;
    const isTied = playerSelection == computerSelection;
    mainText.textContent = `${capitalize(playerSelection)} vs ${capitalize(computerSelection)} `;

    if (isTied) {
        message.textContent = `It's a tie! Each player gets a point.`;
    }
    
    else if (playerWins()) {
        winner = "player"
        message.textContent = `You win that round!`;
    }
    else if (computerWins()) {
        winner = "computer";
        message.textContent = `The computer won that round.`;
    }
    else {
        winner = "invalid"
        console.log("This round is invalid.")
    }

    updateWinCount(winner);
    return winner;

    function playerWins() {
        return (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper");
    }

    function computerWins() {
        return (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock");
    }
}

function getOverallWinner(playerScore, computerScore) {
    if (playerScore === computerScore) {
        return "No one wins"
    }
    else {
        return (playerScore > computerScore) ? "You win" : "Computer wins";
    }
}

function updateWinCount(winner) {
    switch (winner) {
        case "player":
            playerWins++;
            break;
            case "computer":
                computerWins++;
                break;
    case "none":
        break;
    }

    totalScore = playerWins + computerWins;
}


function updateScoreDisplay() {
    playerScore.textContent = `You: ${playerWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
}

function getMoves(e) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
}

function manageGame(e) {
    if (totalScore < 5) {
        console.log(e.target);
        getMoves(e);
        playRound(playerSelection, computerSelection);
        updateScoreDisplay();

        if (totalScore === 5) {
            winner = getOverallWinner(playerWins, computerWins);
            updateScoreDisplay();
            gameOverText.textContent = "GAME OVER"
            message.textContent = `${winner} the game!`;
        }
    }
}

const buttons = document.querySelectorAll('button');
const mainText = document.querySelector('#main-text');
const message = document.querySelector('#message');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const gameOverText = document.querySelector('#game-over');
let playerWins = 0;
let computerWins = 0;
let totalScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', manageGame);
});

