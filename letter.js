
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
    if (this.input === this.character) {
        // console.log('index answers: ' + Index.guserInput)
        console.log('Correct')
        this.guessed = true;
        console.log(this.guessed)
        Letter.prototype.returnLetter();
    } else {
        console.log("Incorrect")
        guessed = false;
        Letter.prototype.returnLetter();
    }

}
Letter.prototype.returnLetter = function () {
    if (this.guessed === true) {
        console.log(this.character)
    } else {
        console.log(this.placeholder)
    }
}
module.exports = Letter
    
