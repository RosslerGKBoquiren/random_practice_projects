const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while(true) {
    const playerChoice = prompt("Enter rock, paper, scissors, Lizard, Spock (or q to quit): ");
    if (playerChoice.toLowerCase() === "q") {
        break;
    }

    if (
        playerChoice.toLowerCase() !== "rock" && 
        playerChoice.toLowerCase() !== "paper" && 
        playerChoice.toLowerCase() !== "scissors" &&
        playerChoice.toLowerCase() !== "lizard" &&
        playerChoice.toLowerCase() !== "spock" 
    ) {
        console.log("Please enter a valid playerChoice.");
        continue;
    } 

    const choices = ["rock", "paper", "scissors", "lizard", "spock"]; 
    const randomIndex = Math.round(Math.random() * 4)
    const Sheldon_Cooper = choices[randomIndex];

    console.log("Sheldon chose:", Sheldon_Cooper);

    if (Sheldon_Cooper === playerChoice) {
        console.log("Draw!");
        ties++;
    } else if (
        (playerChoice === "paper" && Sheldon_Cooper === "rock") ||
        (playerChoice === "paper" && Sheldon_Cooper === "spock") ||
        (playerChoice === "rock" && Sheldon_Cooper === "scissors") ||
        (playerChoice === "rock" && Sheldon_Cooper === "lizard") ||
        (playerChoice === "scissors" && Sheldon_Cooper === "lizard") ||
        (playerChoice === "scissors" && Sheldon_Cooper === "paper") ||
        (playerChoice === "lizard" && Sheldon_Cooper === "spock") ||
        (playerChoice === "lizard" && Sheldon_Cooper === "paper") ||
        (playerChoice === "spock" && Sheldon_Cooper === "scissors") ||
        (playerChoice === "spock" && Sheldon_Cooper === "rock") 
    ) {
        console.log("Bazinga!");
        wins++;
    } else {
        console.log("Oh, no. You lost so bad");
        losses++;
    }
}

console.log("Wins:", wins, "Losses:", losses, "Ties:", ties);