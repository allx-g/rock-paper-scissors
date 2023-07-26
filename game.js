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
        console.log(`Your ${capitalize(playerSelection)} beat the computer's ${capitalize(computerSelection)}`)
    }
    else if (computerWins()) {
        winner = "computer";
        console.log(`Your ${capitalize(playerSelection)} lost to the computer's ${capitalize(computerSelection)}`)
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

    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt(`Round ${round}:` + 
        "\nMake your move: Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);

        updateWinnerScore(winner);
        console.log(`-- Winner of Round ${round}: ${capitalize(winner)}`);
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