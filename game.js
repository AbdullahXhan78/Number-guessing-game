import inquirer from 'inquirer';
const minNumber = 1;
const maxNumber = 100;
const targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;
console.log(`Welcome to the Number Guessing Game!`);
console.log(`I've picked a number between ${minNumber} and ${maxNumber}.`);
(async () => {
    while (true) {
        const answer = await inquirer.prompt({
            type: 'input',
            name: 'guess',
            message: 'Guess the number:',
            validate: (input) => {
                const num = parseInt(input);
                if (isNaN(num)) {
                    return 'Please enter a valid number.';
                }
                return true;
            }
        });
        const guess = parseInt(answer.guess);
        attempts++;
        if (guess === targetNumber) {
            console.log(`Congratulations! You guessed the number ${targetNumber} correctly in ${attempts} attempts.`);
            break;
        }
        else if (guess < targetNumber) {
            console.log(`Too low! Try guessing higher.`);
        }
        else {
            console.log(`Too high! Try guessing lower.`);
        }
    }
})();
