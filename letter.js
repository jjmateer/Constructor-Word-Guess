const Letter = function (input, character, guessed, check, placeholder) {
    this.input = input
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
    if (this.input === this.character) {
        console.log('Correct')
        guessed = true;
    } else {
        console.log("Incorrect")
        guessed = false;
    }
}
Letter.prototype.returnLetter = function () {
    if (this.guessed === true) {
        this.character = input
    } else {
        this.character = "_"
    }
}
module.exports = Letter