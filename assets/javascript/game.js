//choices
var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//score
var wins = 0;
var losses = 0;
var guesses = 11;
var guessesLeft = 11;
var guessedLetters = [];

//computer guesses letter
var computerGuess = Alphabet[Math.floor(Math.random() * Alphabet.length)];

//reset
var reset = function () {
    computerGuess = Alphabet[Math.floor(Math.random() * Alphabet.length)];
    guessesLeft = 10;
    guessedLetters = [];
    document.getElementById("guessesLeft").innerHTML = "Guesses left : " + guessesLeft;
    document.getElementById("done").innerHTML = "Your guesses so far : " + guessedLetters;
}
console.log(computerGuess);
//user input key 
//letters guessed
//win and lose counter
window.onload = function () {
    document.onkeyup = function (event) {
        var done = document.getElementById("done");
        var span = document.createElement("span");
        span.innerText = event.key + " , ";
        done.appendChild(span);
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = "Guesses left : " + guessesLeft;
        if (guessesLeft > 0) {
            if (event.key === computerGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
                alert("How did you know!?!");
                reset();

            }
        } else if (guessesLeft === 0) {
            losses++;
            document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
            alert("Sorry, you're not a psychic!");
            reset();
        }

    }
}