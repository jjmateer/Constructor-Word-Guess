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
        // console.log(currentWord[i])
        compareArr = currentWord[i].split('')

    }
    // console.log(compareArr)
    // console.log(letArr2)
    letterArray = [];
    letArr2 = [];
}

Word.prototype.clearLog = function () {
    correctLog = [];
}
Word.prototype.isCompletefunc = function () {
    // console.log(letArr2)
    for (var i = 0; i < compareArr.length; i++) {
        // console.log(Letter.prototype.character)
        var check1 = compareArr[i]
        var check2 = letArr2[i]
        finalCheck1.push(check1)
        finalCheck2.push(check2)
    }
    finalCheck()
    // console.log(letArr2.length)
    // console.log(complete)
    // if(complete !== 0 &&complete === letArr2.length) {
    //     Word.prototype.isComplete === true
    // } else {
    //     Word.prototype.isComplete === false
    // }
    // console.log(Word.prototype.isComplete)
}
function finalCheck() {

    for (var i = 0; i < finalCheck2.length; i++) {
        if (finalCheck2[i] === finalCheck1[i]) {
            complete++
            if (complete === letArr2.length) {
                    console.log(complete)
                console.log(Word.prototype.isComplete)
                Word.prototype.isComplete = true
            }
                    console.log(Word.prototype.isComplete)
            // console.log(complete)
            // Word.prototype.isComplete === true
        } else {
            // Word.prototype.isComplete === false
            console.log(false)
        }
        // console.log(Letter.prototype.placeholder)
        console.log(finalCheck1)
        console.log(finalCheck2)

    }
    // console.log(letArr2.length)
    // if (complete === letArr2.length) {
    //     console.log(Word.prototype.isComplete)
    //         Word.prototype.isComplete === true
    // }
    // if(complete === letArr2.length) {
    //     Word.prototype.isComplete === true
    // }
    // console.log(complete)
    finalCheck1 = []
    finalCheck2 = []


}
module.exports = Word