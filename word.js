var Letter = require('./letter');

const Word = function (underscore, letters) {
    this.underscore = underscore;
    this.letters = letters;

};
var input = process.argv[2]
var words = ['cat', 'ice', 'dog']
var letterArray = []
function splitWord() {
    for (var i = 0; i < words.length; i++) {
        var newWord = words[i].split('');
        console.log("new word: " + newWord)
    }
}
// array1.forEach(function(element) {
//     console.log(element);
//   });
function convertWord() {
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            var letterObj = new Letter(input, words[i][j], false)
            letterArray.push(letterObj)
            console.log(letterObj)
        }
    }
    console.log("letter array: " + (letterArray))
}
splitWord();
convertWord();