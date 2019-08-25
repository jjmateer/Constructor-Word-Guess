
const Letter = function (input, character, guessed, check, placeholder, answerLogLetter) {
    this.input = input
    this.character = character
    this.guessed = guessed
    this.check = check
    this.placeholder = placeholder
    this.answerLogLetter = answerLogLetter
};
Letter.prototype.placeholder = "_"

var checkArray = [];
var checkArray2 = [];
Letter.prototype.check = function () {
    if (this.input === this.character) {
        // console.log(this.character)
        // console.log('Correct')
        this.guessed = true;
        // console.log("guessed: " + this.guessed)

    }else if (this.input !== this.character) {
        // console.log(this.character)
        // console.log("Incorrect")
        this.guessed = false;

        // console.log("guessed: " + this.guessed)

    }
    // Letter.prototype.returnLetter();
}

// Letter.prototype.returnLetter = function () {
//     if (this.guessed === true) {
//         checkArray.push(this.character)
//     }
//     if (this.guessed === false) {
//         checkArray.push(this.placeholder)
//     }

// }
// Letter.prototype.display = function () {
//     // console.log(checkArray)
//     // console.log(checkArray2)
//     console.log('answerlog: ' + this.answerLogLetter)

//     // emptycheck()

// }
// function emptycheck() {
//     checkArray = [];
// }
module.exports = Letter