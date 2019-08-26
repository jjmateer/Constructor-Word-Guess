// var Word = require('./word');
const Letter = function (input, character, guessed, check, placeholder, guess) {
    this.input = input
    this.character = character
    this.guessed = guessed
    this.check = check
    this.placeholder = placeholder
    this.guess = guess
};
Letter.prototype.placeholder = "_"
// var finalWord = [];
Letter.prototype.check = function () {
    if (this.input === this.character) {
        this.guessed = true;
        // console.log("guessed: " + this.guessed)
    } else {
        this.guessed = false;
        // console.log("guessed: " + this.guessed)
    }
    // Letter.prototype.guess()
    // returnWord();
}


function returnWord() {

}




// Letter.prototype.guess = function () {

//     if (this.guessed === true) {

//     } else {

//     }
// if (this.guessed === false) {
//     finalWord.push(this.placeholder)
// }
// console.log(finalWord)

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