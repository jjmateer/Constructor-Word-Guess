var Letter = require('./letter');
const Word = function (convertWord, splitWord, words, loopChars, input, answerLogWord) {
    this.convertWord = convertWord;
    this.splitWord = splitWord;
    this.words = words;
    this.loopChars = loopChars;
    this.input = input
    this.answerLogWord = answerLogWord
};
var currentWord = [];
var words = ['television', 'computer', 'automobile']
var letterArray = []
var letArr2 = [];
Word.prototype.randomWord = function () {
    var random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        currentWord.push(words[0])
        // console.log(currentWord)
    }
    if (random === 2) {
        currentWord.push(words[1])
        // console.log(currentWord)
    }
    if (random === 3) {
        currentWord.push(words[2])
        // console.log(currentWord)
    }
    if (currentWord.length > 1) {
        currentWord.shift();
    }
}

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
            var letterObj = new Letter(this.input, currentWord[i][j], false)
            letterArray.push(letterObj)
            // console.log(letterObj)
            // console.log(currentWord[i][j])
            // console.log(letterArray)
        }
    }
    // Word.prototype.loopChars = function () {
    for (var i = 0; i < letterArray.length; i++) {
        Letter.prototype.input = letterArray[i].input
        Letter.prototype.character = letterArray[i].character
        Letter.prototype.answerLogLetter = this.answerLogWord
        // console.log(letterArray[i])
        // console.log("Letter " + JSON.stringify(letterArray[i].input))
        // console.log("char " + JSON.stringify(letterArray[i].character))
        Letter.prototype.check()
        var guessed = Letter.prototype.guessed
        console.log(guessed)
    }
    returnLetters();
    emptyLetter();
    // Word.prototype.loopChars()
}
// Word.prototype.loopChars = function () {
//     for (var i = 0; i < letterArray.length; i++) {
//         Letter.prototype.input = letterArray[i].input
//         Letter.prototype.character = letterArray[i].character
//         Letter.prototype.answerLogLetter = this.answerLogWord
//         console.log(letterArray[i].character)
//         // console.log("Letter " + JSON.stringify(letterArray[i].input))
//         // console.log("char " + JSON.stringify(letterArray[i].character))
//         Letter.prototype.check()
//     }
// returnLetters();
// // console.log(letterArray)
// // Letter.prototype.display()
// emptyLetter();

// }
function returnLetters() {
    console.log(letArr2)
}
function emptyLetter() {
    letterArray = [];
}

module.exports = Word