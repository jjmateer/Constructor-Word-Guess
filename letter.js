
const Letter = function (input, character, guessed, check, placeholder) {
    this.input = input
    this.character = character
    this.guessed = guessed
    this.check = check
    this.placeholder = placeholder
};

Letter.prototype.check = function () {
    console.log(this.character)
    if (this.input === this.character) {
        this.guessed = true;
        // console.log("guessed: " + this.guessed)
    } else if(this.input === this.character){
        this.guessed = false
    }
    guess();
}

function guess() {
    if(this.guessed === true) {
        this.placeholder = this.character
    } else {
        this.placeholder = "_"
    }
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