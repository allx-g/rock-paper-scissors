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
    }
    // Player wins
    else if (playerWins()) {
        winner = "player";
    }
    else if (computerWins()) {
        winner = "computer";
    }
    else {
        winner = "invalid"
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
    // Track player and computer scores
    let playerScore = 0;
    let computerScore = 0;
    // Loop 5 times
    for (let i = 0; i < 5; i++) {
        // Prompt the player to make a choice
        let playerSelection = prompt("Make your move: Rock, Paper, or Scissors?");
        // Generate a random choice for the computer
        let computerSelection = getComputerChoice();
        // Play round
        let winner = playRound(playerSelection, computerSelection);
        // Whoever wins, increment their score by one
        updateWinnerScore(winner);
        // Show a message telling the player who won the round
    }
    // Show final scores and determine a winner
    
    function updateWinnerScore(winner) {
        switch (winner) {
            case "player":
                playerScore++;
            case "computer":
                computerScore++;
        }
    }
}