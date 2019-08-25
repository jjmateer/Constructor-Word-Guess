var Letter = require('./letter');
const Word = function (currentWord, convertWord, splitWord, words, input) {
    this.currentWord = currentWord;
    this.convertWord = convertWord;
    this.splitWord = splitWord;
    this.words = words;
    this.input = input

};
var currentWord = [];
var letterArray = []
var letArr2 = [];
Word.prototype.currentWord = currentWord;
Word.prototype.splitWord = function () {
    for (var i = 0; i < currentWord.length; i++) {
        var newWord = currentWord[i].split('');
        console.log("new word: " + newWord)
    }
    Word.prototype.convertWord()
}
Word.prototype.convertWord = function () {
    for (var i = 0; i < currentWord.length; i++) {
        for (var j = 0; j < currentWord[i].length; j++) {
            var letterObj = new Letter(this.input, currentWord[i][j], false, this.check, this.placeholder)
            letterArray.push(letterObj)
        }
    }
    // Word.prototype.loopChars = function () {
    for (var i = 0; i < letterArray.length; i++) {
        Letter.prototype.input = letterArray[i].input
        Letter.prototype.character = letterArray[i].character
        var guessed = Letter.prototype.guessed
        // console.log(letterArray[i])
        // console.log("Letter " + JSON.stringify(letterArray[i].input))
        // console.log("char " + JSON.stringify(letterArray[i].character))
        Letter.prototype.check()
        // console.log(guessed)
        // if (guessed === true) {
        //     letArr2.push(letterArray[i].character)
        // } if(guessed === false){
        //     letArr2.push(Letter.prototype.placeholder)
        // }
    }
    returnLetters();
    emptyLetter();
}
function returnLetters() {
    console.log(letArr2)
}
function emptyLetter() {
    letterArray = [];
    letArr2 = [];
}

module.exports = Word