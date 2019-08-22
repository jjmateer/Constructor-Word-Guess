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
    Letter.prototype.check(answers);
});