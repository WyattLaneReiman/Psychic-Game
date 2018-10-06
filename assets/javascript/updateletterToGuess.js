//letter to guess function
class updateletterToGuess {
    constructor() {
        this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
    }
}