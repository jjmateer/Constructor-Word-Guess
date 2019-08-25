const inquirer = require("inquirer");
const Word = require('./word');
var count = 0;
var answerLog = [];
var words = ['television', 'computer', 'automobile']
if(count === 0) {
    randomWord();
    startApp();
}
function randomWord() {
    var random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        Word.prototype.currentWord.push(words[0])
        // console.log(Word.prototype.currentWord)
    }
    if (random === 2) {
        Word.prototype.currentWord.push(words[1])
        // console.log(Word.prototype.currentWord)
    }
    if (random === 3) {
        Word.prototype.currentWord.push(words[2])
        // console.log(Word.prototype.currentWord)
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
        Word.prototype.splitWord()
        answerLog.push(answers.guess)
        Word.prototype.answerLogWord = answerLog
    }).then(func => {
        if (count < 10) {
            startApp();
        }
        if(count > 10) {
            count = 0
            console.log(count)
        }
    })
}
// function askAgain() {
//     inquirer.prompt ([
//         {
//             type: 'input',
//             name: 'guess2',
//             message:'guess a letter2: '
//         }
//     ]).then(answers => {
//         Word.prototype.input = answers.guess
//         Word.prototype.splitWord()
//         answerLog.push(answers.guess)
//     })

// }