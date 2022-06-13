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

/**
 * @param {String} choice 
 * @param {String} computerChoice 
 * @returns "tie" | "you" | "computer"
 */
function getWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return "tie";
  } else if (whatBeatsWhat[choice].includes(computerChoice)) {
    return "you";
  } else if (whatBeatsWhat[computerChoice].includes(choice)) {
    return "computer";
  } else {
    throw Error(`UNFORSEEN COMBINATION.  IS AN INPUT INVALID? choice:${choice} computerChoice:${computerChoice}`);
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  const winner = getWinner(choice, computerChoice);

  if (winner === "tie") {
    prompt("It's a tie!");
  } else if (winner === "you") {
    prompt('You win!');
  } else if (winner === "computer") {
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

let tallys = {tie: 0, you: 0, computer: 0}
while (true) {
  const choice = getValidChoice();

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  const winner = getWinner(choice, computerChoice);
  tallys[winner] += 1;
  console.log(`So far, You won ${tallys.you} games, the computer won ${tallys.computer} games`);
  if (tallys.you >= 3) {
    prompt("YOU ARE THE GRAND WINNER! (best of 5 games)");
    break;
  } else if (tallys.computer >= 3) {
    prompt("THE COMPUTER IS THE GRAND WINNER! (best of 5 games)");
    break;
  }

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}