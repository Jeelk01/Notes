const { resolve } = require('path');
const readline = require('readline')

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
})
function ask(prompt) {
     return new Promise((resolve) => rl.question(prompt + ' ', resolve));
}


async function Game() {
     console.log("We are starting the Game.");

     console.log('\n');
     console.log("I Have Defined a number between 1 - 100.");

     const DEFINED_NUMBER = Math.floor(Math.random() * 100) + 1;

     let GUESSED_NUMBER = null;

     let tryCount = 0

     while (true) {
          console.log('---------------------------------------------');
          console.log("Try No : ", tryCount + 1);

          console.log('---------------------------------------------');

          GUESSED_NUMBER = parseInt(await ask("Guess the Number"))
          if (GUESSED_NUMBER == DEFINED_NUMBER) {
               console.log("Hurrah ! You have Guessed right..!");
               break;
          }
          else if (GUESSED_NUMBER > DEFINED_NUMBER) {
               console.log("You have Guessed too high. Guess Some Lower.");
          } else {
               console.log("You have Guessed too low. guess Some higher.");
          }

          tryCount++;
          console.log('---------------------------------------------');

     }

     console.clear();

               console.log('---------------------------------------------');
               console.log("Total Try : ", tryCount);
               console.log("Efficiency : ", (100 - tryCount),"%" );
               console.log('---------------------------------------------');

     rl.close();
     return;

}

Game();