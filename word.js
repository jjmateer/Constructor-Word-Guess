var Letter = require('./letter');
const Word = function (currentWord, convertWord, words, input, clearLog, isComplete, isCompletefunc) {
    this.currentWord = currentWord
    this.convertWord = convertWord;
    this.splitWord = splitWord;
    this.words = words;
    this.input = input;
    this.clearLog = clearLog;
    this.isComplete = isComplete
    this.isCompletefunc = isCompletefunc
};
var compareArr = [];
var currentWord = [];
var letterArray = []
var letArr2 = [];
var correctLog = [];
var complete = 0;
var finalCheck1 = [];
var finalCheck2 = [];
Word.prototype.currentWord = currentWord;
Word.prototype.isComplete = false;
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
    Word.prototype.isCompletefunc()
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
    for (var i = 0; i < currentWord.length; i++) {
        compareArr = currentWord[i].split('')

    }

    letterArray = [];
    letArr2 = [];
}

Word.prototype.clearLog = function () {
    correctLog = [];
}
Word.prototype.isCompletefunc = function () {
    console.log(letArr2)
    for (var i = 0; i < compareArr.length; i++) {
        var check1 = compareArr[i]
        var check2 = letArr2[i]
        finalCheck1.push(check1)
        finalCheck2.push(check2)
    }
    finalCheck()
}
function finalCheck() {
    for (var i = 0; i < finalCheck2.length; i++) {
        if (finalCheck2[i] === finalCheck1[i]) {
            complete++
            // console.log(complete)
        }
    }
    if (complete === finalCheck1.length && complete > 0) {
        Word.prototype.isComplete = true
        // console.log(Word.prototype.isComplete)
    }
    finalCheck1 = []
    finalCheck2 = []
    complete = 0
}
module.exports = Word