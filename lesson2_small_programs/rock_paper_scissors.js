const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const VALID_CHOICES_CODES = ['r', 'p', 'sc', 'sp', 'l'];
let whatBeatsWhat = {};
for (let ind = 0; ind < VALID_CHOICES.length; ind++) {
  whatBeatsWhat[VALID_CHOICES[ind]] =
    [VALID_CHOICES[(ind + 2) % 5], VALID_CHOICES[(ind + 4) % 5]];
}
// console.log(whatBeatsWhat);

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (choice === computerChoice) {
    prompt("It's a tie!");
  } else if (whatBeatsWhat[choice].includes(computerChoice)) {
    prompt('You win!');
  } else if (whatBeatsWhat[computerChoice].includes(choice)) {
    prompt('Computer wins!');
  } else {
    prompt("UNFORSEEN COMBINATION.  IS AN INPUT INVALID?");
  }
}

function getValidChoice() {
  while (true) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}, or use one of the corresponding codes: ${VALID_CHOICES_CODES.join(', ')}`);
    let choice = readline.question();
    if (VALID_CHOICES_CODES.includes(choice)) {
      choice = VALID_CHOICES[VALID_CHOICES_CODES.indexOf(choice)];
    }
    if (VALID_CHOICES.includes(choice)) {
      return choice;
    }
    prompt("That's not a valid choice, please try again");
  }
}

while (true) {
  const choice = getValidChoice();

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}