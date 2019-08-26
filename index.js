const inquirer = require("inquirer");
const Word = require('./word');
var count = 0;
var answerLog = [];
var words = ['television', 'computer', 'automobile']
if (count === 0) {
    randomWord();
    startApp();
}
function randomWord() {
    var random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        Word.prototype.currentWord.push(words[0])
    }
    if (random === 2) {
        Word.prototype.currentWord.push(words[1])
    }
    if (random === 3) {
        Word.prototype.currentWord.push(words[2])
    }
    if (Word.prototype.currentWord.length > 1) {
        Word.prototype.currentWord.shift();
    }
}
function startApp() {
    count++
    inquirer.prompt([
        {
            type: 'input',
            name: "guess",
            message: "Guess a letter: "
        }
    ]).then(answers => {
        Word.prototype.input = answers.guess
        Word.prototype.convertWord()
        answerLog.push(answers.guess)
        Word.prototype.answerLogWord = answerLog
    }).then(func => {
        if (count < 10) {
            startApp();
        }
        if (count === 10) {
            randomWord();
            Word.prototype.clearLog();
            count = 0
        }
    }).then(func => {
        if (count === 10){
            startApp();
    }
    })
}