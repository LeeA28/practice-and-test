let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let tries = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') {
        break;
    }
    tries++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess")
    } else {
        guess = prompt("Too low! Enter a new guess")
    }
}

if (guess === 'q') {
    console.log("Exiting the game!");
}
else if (tries === 1) {
    console.log("Amazing you guessed the correct number!");
    console.log(`It took you 1 try!`);
}
else {
    console.log("Amazing you guessed the correct number!");
    console.log(`It took you ${tries} tries!`);
}
