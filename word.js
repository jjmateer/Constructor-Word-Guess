var Letter = require('./letter');
var Index = require('./index')
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
        console.log(currentWord)
    }
    if (random === 2) {
        currentWord.push(words[1])
        console.log(currentWord)
    }
    if (random === 3) {
        currentWord.push(words[2])
        console.log(currentWord)
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
// array1.forEach(function(element) {
//     console.log(element);
//   });
Word.prototype.convertWord = function () {
    for (var i = 0; i < currentWord.length; i++) {
        for (var j = 0; j < currentWord[i].length; j++) {
            var letterObj = new Letter(this.input, currentWord[i][j], false)
            letterArray.push(letterObj)
            console.log(letterObj)
        }
        console.log("Letter array: " + (JSON.stringify(letterArray)))
    }
    // console.log('hi' + words[i][j])
    // console.log("letter array: " + (letterArray))
    Word.prototype.loopChars()
}
Word.prototype.loopChars = function () {
    for (var i = 0; i < letterArray.length; i++) {
        Letter.prototype.check()
    }
}
module.exports = Word