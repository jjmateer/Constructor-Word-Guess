
const Letter = function (input, character, guessed, check, placeholder) {
    this.input = input
    this.character = character
    this.guessed = guessed
    this.check = check
    this.placeholder = "_"
};
Letter.prototype.printInfo = function () {
    console.log("\ninput: " + this.input +
        "\ncharacter: " + this.character + "\nguessed: " + this.guessed + "\ncheck" +
        this.check);
};
// Letter.prototype.input = function() {

// }

Letter.prototype.check = function () {
    // console.log('hi ' + JSON.stringify(this.character))
    if (this.input === this.character) {
        console.log(this.character)
        console.log('Correct')
        this.guessed = true;
        console.log("guessed: " + this.guessed)
        Letter.prototype.returnLetter();
    } else if(this.input !== this.character) {
        console.log(this.character)
        console.log("Incorrect")
        this.guessed = false;
        console.log("guessed: " + this.guessed)
        Letter.prototype.returnLetter();
        console.log()
    }

}
Letter.prototype.returnLetter = function () {
    if (this.guessed === true) {
        console.log('character')
    } else {
        console.log('placeholder')
    }
}
module.exports = Letter
    
