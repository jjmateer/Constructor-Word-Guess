const inquirer = require("inquirer");
const Word = require('./word');
var userInput;
inquirer.prompt([
    {
        type: 'input',
        name: "guess",
        message: "Guess a letter: "
    }
]).then(answers => {
    // userInput = answers.guess
    Word.prototype.input = answers.guess
    // Letter.prototype.input = userInput
    // console.log("user input: " + userInput)
    Word.prototype.randomWord()
});