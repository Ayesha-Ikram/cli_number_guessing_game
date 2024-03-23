#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
const game = await inquirer.prompt([
    {
        type: "number",
        name: "guessnumber",
        message: "Please Guess a Number between 1-10: ",
    }
]);
if (game.guessnumber === randomNumber) {
    console.log("Cogratulations! You guessed right number:)");
}
else {
    console.log("Sorry! You guessed wrong number. ");
}
