var Letter = require('./letter');
// console.log(Index.userInput)
const Word = function (convertWord, splitWord, words, loopChars, input) {
    this.convertWord = convertWord;
    this.splitWord = splitWord;
    this.words = words;
    this.loopChars = loopChars;
    this.input = input
};
var currentWord = [];
var words = ['cat', 'ice', 'dog']
var letterArray = []
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
    Word.prototype.splitWord()
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
        }
        // console.log("Letter array: " + (JSON.stringify(letterArray)))
    }
    Word.prototype.loopChars()
}
Word.prototype.loopChars = function () {
    for (var i = 0; i < letterArray.length; i++) {
        Letter.prototype.placeholder = "_"
        Letter.prototype.input = letterArray[i].input
        Letter.prototype.character = letterArray[i].character
        // console.log("Letter " + JSON.stringify(letterArray[i].input))
        // console.log("char " + JSON.stringify(letterArray[i].character))
        Letter.prototype.check()
    }
    Letter.prototype.display()
}

module.exports = Word
    

