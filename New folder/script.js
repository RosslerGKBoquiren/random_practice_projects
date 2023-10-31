const prompt = require("prompt-sync")()

console.log("Welcome to the Computer Hardware Quiz!")

let correctAnswers = 0
const totalQuestions = 10;

const answer1 = prompt("What is the name of the fire starter Pokemon in generation one? ");
const correctAnswer1 = "charmander";

if (answer1.toLowerCase() == correctAnswer1) {
    console.log("Pikachu, our lucky star is shining today!");
    correctAnswers++;
} else {
    console.log("Roses are red, violets are blue. If you were a Pokemon I wouldn't choose you!");
}

const answer2 = prompt("What is the name of the second evolution of Charmander? ");
const correctAnswer2 = "charizard";

if (answer2.toLowerCase() == correctAnswer2) {
    console.log("That’s progress. At least your brain is working.");
    correctAnswers++;
} else {
    console.log("Sometimes I look at that psyducks face, and I get a headache.");
}

const answer3 = prompt("In the original fire red Pokemon game on Gameboy, at what level does Charmeleon evolve to Charizard? Please enter a number... ");
const correctAnswer3 = "36";

if (answer3 == correctAnswer3) {
    console.log("The bond you share with your Pokemon is marvelous.");
    correctAnswers++;
} else {
    console.log("Your favorite Pokemon must be Garbador, because you're trash!");
}

const answer4 = prompt("Pokemon is a turn based game. Who goes first? Player or opponent? ");
const correctAnswer4 = "player";

if (answer4.toLowerCase() == correctAnswer4) {
    console.log("The world’s greatest Pokémon Master! ");
    correctAnswers++;
} else {
    console.log("The more wonderful the meeting, the sadder the parting.");
}


const answer5 = prompt("There are several gyms located across Pokemon's vast map. In which city is Misty's gym located? ");
const correctAnswer5 = "cerulean";

if (answer5.toLowerCase() == correctAnswer5) {
    console.log("Team Rocket blasting off at the speed of light! ");
    correctAnswers++;
} else {
    console.log("Wanna see what destruction looks like? Here it is in human form.");
}

const answer6 = prompt("In generation 1's Lavender town, what item was used to reveal the wild Ghost pokemon? ");
const correctAnswer6 = "silph scope";

if (answer6.toLowerCase() == correctAnswer6) {
    console.log("What is this pressure I feel…? Something… is enraged? ");
    correctAnswers++;
} else {
    console.log("Human and Pokemon can *NEVER* be friends. ");
}

const answer7 = prompt("Gen 1 Pokemon gyms are specialized in certain types. What type was the Pewter city gym specialized in? ");
const correctAnswer7 = "rock";

if (answer7.toLowerCase() == correctAnswer7) {
    console.log("I wanna be the very best like no one ever was. To catch them is my real test; to train them is my cause!!! ");
    correctAnswers++;
} else {
    console.log("Man has plenty to learn from nature and Pokémon ");
}

const answer8 = prompt("What is the name of one of the three legendary birds donning the power of lightning? ");
const correctAnswer8 = "zapdos";

if (answer8.toLowerCase() == correctAnswer8) {
    console.log("Know yourself, know your adversary, and you hold the key to victory. ");
    correctAnswers++;
} else {
    console.log("Reality can really bum you out… ");
}

const answer9 = prompt("At what level does Grimer evolve into Muk? Please enter a number ");
const correctAnswer9 = "38";

if (answer9 == correctAnswer9) {
    console.log("You, give up? No way! ");
    correctAnswers++;
} else {
    console.log("Well, if you just try hard enough, things will work out...");
}

const answer10 = prompt("In generation 1, which Pokemon comes from the Helix fossil? ");
const correctAnswer10 = "aerodactyl";

if(answer10.toLowerCase() == correctAnswer10) {
    console.log("Take charge of your destiny! ");
    correctAnswers++;
} else {
    console.log("The Last Time You Cooked You Wiped Out Eight Of My Nine Lives. ");
} 

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers, "questions correct!")
console.log("You scored", percent.toString() + "%"); 

if (percent < 60) {
    console.log("Physical wounds can be treated without much difficulty, but emotional wounds are not so easy to heal... ");
} else if (percent > 60 && percent < 80) {
    console.log("To them, this is just one more challenge. They follow their hearts. That is what sets them apart, and will make them Pokémon Masters! ")
} else {
    console.log("You are a Pokemon Master!")
}