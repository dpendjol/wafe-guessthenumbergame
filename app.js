const randomNumber = function (min=4, max=9) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Welkoming the new user
alert('Welkom bij de Guessing game');

// Getting the name from the user
let uname = prompt('Zou ik je naam mogen weten?');

// Calling the user by name
alert('Gezellig dat je er bent ' + uname + '. Ben je klaar om te beginnen?');
let guessMax = prompt('We gaan een getal raden. wat is het grootste getal dat je wilt raden?')
let guessMin = prompt('Wat is het kleinste getal dat je wil raden?');

// Letting the computer randomize a number
let guessNumber = randomNumber(guessMin, guessMax);
console.log(guessNumber); // console log the numer for testing purposes

// Getting latest intel regaring to number of chances
alert('Oke ik heb een getal gekozen. Kunnen we beginnen?');
let numGuess = prompt('Hoeveel kansen wil je?');

// Let the guessing begon
let numGuesses = 1; // number of guesses done by user
let userGuess = prompt('Okeee, we zijn begonnen. Wat is je eerste gok?');
let remainGuesses = null;

// kijken of het goede getal al is geraden of dat het aantal beurten voorbij is
while (guessNumber != userGuess) {
    remainGuesses = numGuess - numGuesses;
    if (remainGuesses !== 0 ) {
        userGuess = prompt('Helaas, dat was niet het goede getal, probeer opnieuw. Je hebt nog ' + (remainGuesses));
        numGuesses++; 
    } else {
        alert('Game Over');
        break;
    }
    
}

// wanneer de loop onderbroken is, is dat omdat de beurten op waren of omdat het getal geraden is?
if (userGuess == guessNumber) {
    alert('YESS, het goede getal was: ' + userGuess);
} else {
    alert('Helaas heb je het goede getal niet geraden.')
}

//The End.
alert('Dank je wel dat je hebt gespeelt. Hopelijk tot een volgende keer.');