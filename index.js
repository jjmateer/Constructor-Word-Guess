const inquirer = require("inquirer");
const Word = require('./word');
var count = 0;
if(count === 0) {
    startApp();
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
        Word.prototype.randomWord()
    }).then(func => {
        if (count < 5) {
            startApp();
        }
        if(count > 5) {
            count = 0
            console.log(count)
        }
    })


}