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
    
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    // Player wins
    else if (checkIfPlayerWins()) {
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    }
    else if (checkIfComputerWins()) {
        return `You lose. ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    }
    else {
        return "Invalid round";
    }

    function checkIfPlayerWins() {
        return (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper");
    }

    function checkIfComputerWins() {
        return (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock");
    }
}

console.log(playRound("paper", "scissors"));