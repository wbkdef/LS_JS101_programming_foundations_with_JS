const readLineSync = require('readline-sync');

const CARD_TYPES = ["club", "diamond", "heart", "spade"];
const CARD_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

const MAX_POINTS = 21;
const DEALER_MIN_POINTS = 17;

class Card {
  constructor (type, number) {
    this.type = type;
    this.number = number;
  }
  getValue21() {
    if (["jack", "queen", "king"].includes(this.number)) {
      return 10;
    }
    return this.number;
  }
}

function shuffle(arr) {
  for (let ind = arr.length - 1; ind > 0; ind--) {
    let randInd = Math.floor(Math.random() * (ind + 1));
    [arr[ind], arr[randInd]] = [arr[randInd], arr[ind]];
  }
}
// let arr = [1, 5, 2, 4, 3];
// shuffle(arr);
// console.log(arr);

class Deck {
  constructor() {
    this.cards = [];
    for (const type of CARD_TYPES) {
      for (const number of CARD_NUMBERS) {
        this.cards.push(new Card(type, number));
      }
    }
    shuffle(this.cards);
  }
  drawCard() {
    return this.cards.pop();
  }
}

// class Player {
//   constructor(brand) {
//     this.name = "superclass";
//   }
//   addCard() {

//   }
//   visibleCards() {

//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input:
//     Gets input - will the user hit or pass - repeatedly until passes or bust
//   output:
//     - Outputs the dealer's visible cards.
//     - Runs a game of 21
//   signature: () =>
//   Rules:
//     Explicit:
//       - 1 dealer card visible
//       - dealer will hit until gets at least 17 (after user).
//       - Ace worth 1 or 11, number cards worth their numbers,
//            face cards worth 10
//       - User can hit or pass - repeatedly until passes or bust.
//       - Bust if cards exceed 21
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Deal 1 (visible) card to the dealer
//   Display this card to the user
//   Ask the user if they would like to hit, until bust or pass
//     To determine if bust, count aces as 1.
//   To determine score, count aces as 1.  Then if score <= 11 and there's
//       at least 1 ace, increase score by 10

console.log(`\nStarting game of ${MAX_POINTS}`);
const deck = new Deck();

class Game21 {
  constructor() {
    this.deck = new Deck();
    this.cardsDealer = [deck.drawCard()];
    this.cardsUser = [deck.drawCard(), deck.drawCard()];
  }

  outputGameState() {
    console.log("The dealer's hand is:");
    displayHand(this.cardsDealer);
    console.log("Your hand is:");
    displayHand(this.cardsUser);
  }

  userDrawsCards() {
    while (true) {
      this.outputGameState();
      const choice = readLineSync.question('Choose an option: "h" (hit) or "p" (pass):');
      if (choice === "h") {
        this.cardsUser.push(deck.drawCard());
        if (handValue(this.cardsUser) > MAX_POINTS) {
          console.log('\nYour hand is now:');
          displayHand(this.cardsUser);
          console.log(`\nYou busted with a hand value of ${handValue(this.cardsUser)}`);
          return;
        }
      } else if (choice === 'p') {
        console.log("You passed. It's now the dealer's turn");
        break;
      } else {
        console.log("Invalid choice.  Please try again.");
      }
    }
  }

  dealerDrawsCards() {
    while (handValue(this.cardsDealer) < DEALER_MIN_POINTS) {
      this.cardsDealer.push(this.deck.drawCard());
    }
    this.outputGameState();
  }

  play() {
    this.userDrawsCards();
    if (handValue(this.cardsUser) > MAX_POINTS) {
      console.log("You Lost :(");
      return;
    }

    this.dealerDrawsCards();
    console.log(`The dealer drew cards:`);
    if (handValue(this.cardsDealer) > MAX_POINTS) {
      console.log(`The dealer is bust!`);
      console.log("You Won! :)");
      return;
    }

    if (handValue(this.cardsUser) > handValue(this.cardsDealer)) {
      console.log(`You won, ${handValue(this.cardsUser)} to ${handValue(this.cardsDealer)}!`);
    } else {
      console.log(`You lost, ${handValue(this.cardsUser)} to ${handValue(this.cardsDealer)}!`);
    }

  }
}

do {
  const game21 = new Game21();
  game21.play();
} while (playAgain());


function playAgain() {
  console.log('---------------------');
  while (true) {
    let playAgain = readLineSync.question('Would you like to play again? (y)es or (n)o.');
    if (playAgain.toLowerCase() === 'y') {
      return true;
    } else if (playAgain.toLowerCase() === 'n') {
      return false;
    } else {
      console.log('\nInvalid input.  Please enter "y" or "n" only.');
    }
  }
}


function displayHand(hand) {
  for (const card of hand) {
    console.log(` => ${card.number} of ${card.type}`);
  }
}


function handValue(hand) {
  let value = hand
    .map(card => card.getValue21())
    .reduce((pv, cv) => pv + cv, 0);
  if (value <= 11 && hand.some(card => card.number === 1)) {
    value += 10;
  }
  return value;
}