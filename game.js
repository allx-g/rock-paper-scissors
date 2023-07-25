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
        return "tie";
    }
    // Player wins
    else if (playerWins()) {
        return "player";
    }
    else if (computerWins()) {
        return "computer";
    }
    else {
        return "Invalid round";
    }

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
    // Track player and computer scores
    // Loop 5 times
        // Prompt the player to make a choice
        // Generate a random choice for the computer
        // Play round
        // Whoever wins, increment their score by one
        // Show a message telling the player who won the round
    // Show final scores and determine a winner       
}