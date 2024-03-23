#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number  = done
// 2) user input for gussing number = done
// 3) compare user input with computer generated number and show result = done
// Math.random();   this number generate number 0 to 1 1 is excluded 0 to 0.9
 // never ever print 7 in this we can also right just six but we right 6 + 1 bcz we can't want to print 0 ex in  dice we did'nt see any time zero 6 + 1 
const randomNumber = Math.floor(Math.random() * 7 + 1);  

const answeres = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Please guss a number 1 - 6: "
    }
])


if (answeres.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you gussed right number.");
} else {
    console.log("You gussed wrong number");
}

