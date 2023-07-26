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
    
    if (playerSelection == computerSelection) {
        winner = "none";
        console.log("It's a tie! Each player gets a point.")
    }
    // Player wins
    else if (playerWins()) {
        winner = "player";
        console.log(`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`)
    }
    else if (computerWins()) {
        winner = "computer";
        console.log(`You lose! ${capitalize(playerSelection)} loses to ${capitalize(computerSelection)}`)
    }
    else {
        winner = "invalid"
        console.log("This round is invalid.")
    }

    return winner;

    function playerWins() {
        return (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper");
    }

    function computerWins() {
        return (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock");
    }
}



function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Make your move: Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);

        updateWinnerScore(winner);
        console.log(`The winner of that round was ${capitalize(winner)}`);
    }
    
    function updateWinnerScore(winner) {
        switch (winner) {
            case "player":
                playerScore++;
                break;
            case "computer":
                computerScore++;
                break;
            case "none":
                playerScore++;
                computerScore++;
                break;
        }
    }
}

game();