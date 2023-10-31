const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100);

let guesses = 0;

while (true) {
    guesses++;

    const guess = Number(prompt("Guess the number (0-100): "));
    if(guess > target) {
        console.log("Too high...")
    } else if (guess < target) {
        console.log("Too low...");
    } else {
        console.log("Money!");
        break;
    }
}

console.log("You guessed the number in", guesses, "tries!");