var Index = require('./index')
const Letter = function (input, character, guessed, check, placeholder) {
    this.input = Index.answers
    this.character = character
    this.guessed = guessed
    this.check = check
    this.placeholder = placeholder
};
Letter.prototype.printInfo = function () {
    console.log("\ninput: " + this.input +
        "\ncharacter: " + this.character + "\nguessed: " + this.guessed + "\ncheck" +
        this.check);
};
Letter.prototype.check = function () {
    if (Index.userInput === this.character) {
        console.log('index answers: ' + Index.guserInput)
        console.log('Correct')
        this.guessed = true;
        console.log(this.guessed)
    } else {
        console.log("Incorrect")
        guessed = false;
    }
}
Letter.prototype.returnLetter = function () {
    if (this.guessed === true) {
        this.character = this.input
    } else {
        this.character = "_"
    }
}
module.exports = Letter
    
