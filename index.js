const inquirer = require("inquirer");
const Word = require('./word');
inquirer.prompt([
    {
        type: 'input',
        name: "guess",
        message: "Guess a letter: "
    }
]).then(answers => {
    var userInput = answers.guess
    // Letter.prototype.input = userInput
    console.log("user input: " + userInput)
    Word.prototype.randomWord()
});
// function randomWord() {

//     var random = Math.floor(Math.random() * 3) + 1;
//     if(random === 1){
//         console.log(words[0])
//     }
//     if(random === 2){
//         console.log(words[1])
//     }
//     if(random === 3){
//         console.log(words[2])
//     }
// }
// randomWord()