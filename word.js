var Letter = require('./letter');
const Word = function (convertWord, splitWord) {
    this.convertWord = convertWord;
    this.splitWord = splitWord;

};

var words = ['cat', 'ice', 'dog']
var letterArray = []
Word.prototype.splitWord = function() {
    for (var i = 0; i < words.length; i++) {
        var newWord = words[i].split('');
        console.log("new word: " + newWord)
    }
}
// array1.forEach(function(element) {
//     console.log(element);
//   });
Word.prototype.convertWord = function() {
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            var letterObj = new Letter('input', words[i][j], false)
            letterArray.push(letterObj)
            console.log(letterObj)
        }
    }
    // console.log('hi' + words[i][j])
    // console.log("letter array: " + (letterArray))
}
module.exports = Word