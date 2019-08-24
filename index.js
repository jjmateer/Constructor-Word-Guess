const inquirer = require("inquirer");
const Word = require('./word');
var count = 0;
var answerLog = [];
if(count === 0) {
    startApp();
    Word.prototype.randomWord()
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