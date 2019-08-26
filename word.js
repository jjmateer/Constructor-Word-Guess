var Letter = require('./letter');
const Word = function (currentWord, convertWord, words, input, clearLog) {
    this.currentWord = currentWord
    this.convertWord = convertWord;
    this.splitWord = splitWord;
    this.words = words;
    this.input = input;
    this.clearLog = clearLog;
};
var currentWord = [];
var letterArray = []
var letArr2 = [];
var correctLog = [];
Word.prototype.currentWord = currentWord;

Word.prototype.convertWord = function () {
    for (var i = 0; i < currentWord.length; i++) {
        for (var j = 0; j < currentWord[i].length; j++) {
            this.letterObj = new Letter(this.input, currentWord[i][j], false, this.check, this.placeholder)
            letterArray.push(this.letterObj)
        }
    }
    for (var i = 0; i < letterArray.length; i++) {
        Letter.prototype.input = letterArray[i].input
        Letter.prototype.character = letterArray[i].character
        Letter.prototype.check()
        returnLetters();
        if (Letter.prototype.guessed === true) {
            letArr2.push(Letter.prototype.character)
            correctLog.push(Letter.prototype.character)
        } else {
            letArr2.push(Letter.prototype.placeholder)
        }
    }
    returnLetters();
    emptyLetter();
}
function returnLetters() {
    for (var i = 0; i < correctLog.length; i++) {
        if (correctLog[i] === Letter.prototype.character) {
            Letter.prototype.guessed = true
        }
    }
}
function emptyLetter() {
    console.log(letArr2)
    letterArray = [];
    letArr2 = [];
}
Word.prototype.clearLog = function () {
    correctLog = [];
}

module.exports = Word