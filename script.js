function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

let playerSelection;
const computerSelection = getComputerChoice();

function playGame(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You win! Rock wins against Scissors";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose! Rock loses to Paper";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! Paper loses to Scissors";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win! Paper wins against Rock";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win! Scissors win against Paper";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! Scissors lose to Rock";
    }
    else {
        return "Same choice, play again!"
    }
}

function game(playGame) {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("what is your choice");
        console.log(playGame(playerSelection, computerSelection)); 
    }    
}

game(playGame);