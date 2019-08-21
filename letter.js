const Letter = function (input, character, guessed, check) {
    this.input = input
    this.character = character
    this.guessed = guessed
    this.check = check
};
Letter.prototype.printInfo = function () {
    console.log("\ninput: " + this.input +
        "\ncharacter: " + this.character + "\nguessed: " + this.guessed + "\ncheck" +
        this.check);
};
this.check = function () {
    if (input === character) {
        console.log('Correct')
        guessed = true
    } else {
        console.log("Incorrect")
        guessed = false
    }
}
function returnLetter() {
    if (guessed === true) {
        placeholder = character
    } else {
        placeholder = "_"
    }
}
module.exports = Letter