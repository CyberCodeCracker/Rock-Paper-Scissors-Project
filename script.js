function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

//The logic of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        playerScore++;
        computerScore--;
        return "You win! Rock wins against Scissors. Current player score: " + playerScore + ".Current computer score: " + computerScore;
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        playerScore--;
        computerScore++;
        return "You lose! Rock loses to Paper. Current player score: " + playerScore + ".Current computer score: " + computerScore;
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        playerScore--;
        computerScore++;
        return "You lose! Paper loses to Scissors. Current player score: " + playerScore + ".Current computer score: " + computerScore;
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        playerScore++;
        computerScore--;
        return "You win! Paper wins against Rock. Current player score: " + playerScore + ".Current computer score: " + computerScore;
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore++;
        computerScore--;
        return "You win! Scissors win against Paper. Current player score: " + playerScore + ".Current computer score: " + computerScore;
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        playerScore--;
        computerScore++;
        return "You lose! Scissors lose to Rock. Current player score: " + playerScore + ".Current computer score: " + computerScore;
    }
    else {
        return "Same choice, play again!. Current player score: " + playerScore + ".Current computer score: " + computerScore;
    }
}

// Uses the DOM and event handling to play the game by using the buttons in the html file
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.value.toString();
        computerSelection = getComputerChoice();

        const result = document.querySelector('.result');
        const gameResult = document.createElement('div');
        gameResult.textContent = playRound(playerSelection, computerSelection);

        result.appendChild(gameResult);
        if (playerScore === 5) {
            gameResult.textContent = "You win!";
        }
        
        else if (computerScore === 5) {
            gameResult.textContent = "You lose :'(";
        }
    })
})



//Plays rock-paper-scissors for five times
/*function game(playGame) {

}

game(playGame); */