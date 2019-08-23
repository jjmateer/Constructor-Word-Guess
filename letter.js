
const Letter = function (input, character, guessed, check, placeholder, display) {
    this.input = input
    this.character = character
    this.guessed = guessed
    this.check = check
    this.placeholder = placeholder
    this.display
};
var checkArray = [];

Letter.prototype.check = function () {
    if (this.input === this.character) {
        // console.log(this.character)
        // console.log('Correct')
        this.guessed = true;
        // console.log("guessed: " + this.guessed)
        Letter.prototype.returnLetter();
    } else if (this.input !== this.character) {
        // console.log(this.character)
        // console.log("Incorrect")
        this.guessed = false;
        // console.log("guessed: " + this.guessed)
        Letter.prototype.returnLetter();
    }

}

Letter.prototype.returnLetter = function () {
    if (this.guessed === true) {
        checkArray.push(this.character)
    } else if (this.guessed === false) {
        checkArray.push(this.placeholder)
    }
}
Letter.prototype.display = function() {
    console.log(checkArray)
}

module.exports = Letter

