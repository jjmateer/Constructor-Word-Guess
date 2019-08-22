const inquirer = require("inquirer");
const Word = require('./word');
const Letter = require('./letter')

inquirer.prompt([
    {
        type: 'input',
        name: "guess",
        message: "Guess a letter: "
    }
]).then(answers => {
    var userInput = answers.guess
    Letter.prototype.input = userInput
    console.log("user input: " + userInput)
    Word.prototype.splitWord()
    Word.prototype.convertWord()
    Letter.prototype.check(); 
});
