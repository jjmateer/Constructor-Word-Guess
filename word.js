var Letter = require('./letter');
const Word = function (currentWord, convertWord, splitWord, words, input, letterObj) {
    this.currentWord = currentWord;
    this.convertWord = convertWord;
    this.splitWord = splitWord;
    this.words = words;
    this.input = input;
    this.letterObj = letterObj

};
var currentWord = [];
var letterArray = []
var letArr2 = [];
var correctLog = [];
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
            this.letterObj = new Letter(this.input, currentWord[i][j], false, this.check, "_", this.guess)
            letterArray.push(this.letterObj)
        }
    }
    // Word.prototype.loopChars = function () {
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
    // console.log(guessed)

    // Letter.prototype.guess();
    returnLetters();
    emptyLetter();
}

function returnLetters() {
    // console.log(letterArray)

    for (var i = 0;i < correctLog.length;i++) {
        if(correctLog[i] === Letter.prototype.character) {
            Letter.prototype.guessed = true
        }
        // console.log(correctLog)
        // console.log(letArr2)
    }
}
function emptyLetter() {
    console.log(letArr2)
    letterArray = [];
    letArr2 = [];
}

module.exports = Word