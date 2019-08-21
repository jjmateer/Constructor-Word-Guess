const Letter = function (placeholder, character, guessed, check) {
    this.placeholder = placeholder
    this.character = character
    this.guessed = guessed
    this.check = check
};
function returnLetter() {
    if(guessed === true) {
        placeholder = character
    } else {
        placeholder = "_"
    }
}
function checkLetter() {
    if(correctLetter === true) {
        console.log('Checked')
        guessed = true
    }
}

module.exports = Letter
