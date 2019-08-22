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
    module.exports.userInput = userInput
    console.log("user input: " + userInput)
    // Letter.prototype.check(userInput); 
});
