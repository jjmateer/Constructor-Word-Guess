const inquirer = require("inquirer");
const Word = require('./word');
var count = 0;
inquirer.prompt([
    {
        type: 'input',
        name: "guess",
        message: "Guess a letter: "
    }
]).then(answers => {
    Word.prototype.input = answers.guess
    Word.prototype.randomWord()
})

