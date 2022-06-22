const assert = require('assert'); //must require the assert
const readLineSync = require('readline-sync');


function joinOr(arr, separator = ', ', or = 'or') {
  if (arr.length === 0) {
    return "";
  } else if (arr.length === 1) {
    return arr[0].toString();
  }
  const start = arr.slice(0, -1).join(separator);
  return start + separator + or + ' ' + arr[arr.length - 1];
}
// console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
// console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
// console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
// console.log(joinOr([]));                      // => ""
// console.log(joinOr([5]));                     // => "5"
// console.log(joinOr([1, 2]));                  // => "1 or 2"


const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const EMPTY_MARKER = ' ';


class Board {
  constructor() {
    this.board = {};
    // Positions are marked, row by row, from 1 to 9
    for (let ind = 0; ind < 9; ind++) {
      this.board[ind] = EMPTY_MARKER;
    }
  }

  display() {
    console.log(' ');
    console.log(this.board['0'] + '|' + this.board['1'] + '|' + this.board['2']);
    console.log('-' + '+' + '-' + '+' + '-');
    console.log(this.board['3'] + '|' + this.board['4'] + '|' + this.board['5']);
    console.log('-' + '+' + '-' + '+' + '-');
    console.log(this.board['6'] + '|' + this.board['7'] + '|' + this.board['8']);
    console.log(' ');
  }

  /**
   * 
   * @param {EMPTY_MARKER | HUMAN_MARKER | COMPUTER_MARKER} type 
   * @returns Set<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'>
   */
  getLocationsOfType(type) {
    let locs = new Set();
    for (let ind = 0; ind < 9; ind++) {
      if (this.board[ind] === type) {
        const toAdd = ind.toString();
        // console.log(`toAdd: ${toAdd} of type ${typeof toAdd}`);
        locs.add(toAdd);
      }
    }
    return locs;
  }

  /**
   *
   * @returns Set<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'>
   */
  getAvailableLocations() {
    return this.getLocationsOfType(EMPTY_MARKER);
  }

  /**
   *
   * @param {'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'} loc
   * @param {EMPTY_MARKER | HUMAN_MARKER | COMPUTER_MARKER} type
   */
  placeMarker(loc, type) {
    const availableLocs = this.getAvailableLocations();
    if (!availableLocs.has(loc)) {
      console.log(typeof loc);
      [...availableLocs].forEach(al => {
        console.log(`${al} is available, of type ${typeof loc}`);
      })
      throw Error(`Trying to place in loc [${loc}], but the only available locations are ${[...availableLocs]}`);
    }
    this.board[loc] = type;
  }

  placeHumanMarker(loc) {
    this.placeMarker(loc, HUMAN_MARKER);
  }

  placeComputerMarker(loc) {
    this.placeMarker(loc, COMPUTER_MARKER);
  }

  /**
   * Returns a copy of the board.
   * @returns Board
   */
  copy() {
    let copy = new Board();
    for (const [key, val] of Object.entries(this.board)) {
      copy.board[key] = val;
    }
    return copy;
  }

  detectWinner(type) {
    let winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winningCombos.some(combo => {
      return combo.every(loc => this.board[loc] === type);
    });
  }
}

/**
 * Gets a move from the user
 * @param {Board} board the current state of the board
 * @returns '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
 */
function getMoveFromHuman(board) {
  const locs = board.getAvailableLocations();
  const move = readLineSync.question(`Enter your move.  Options are ${joinOr([...locs])}: `);
  if (locs.has(move)) {
    return move;
  }
  console.log('\nInvalid choice.  Please try again');
  return getMoveFromHuman(board);
}

/**
 * Gets a move from the user
 * @param {Board} board the current state of the board
 * @returns '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
 */
function getMoveFromAI(board) {
  const locs = [...board.getAvailableLocations()];

  // Win if it's possible
  for (const loc of locs) {
    let bc = board.copy();
    bc.placeComputerMarker(loc);
    if (bc.detectWinner(COMPUTER_MARKER)) {
      return loc;
    }
  }

  // Defend if it's possible
  for (const loc of locs) {
    let bc = board.copy();
    bc.placeHumanMarker(loc);
    if (bc.detectWinner(HUMAN_MARKER)) {
      return loc;
    }
  }

  // Pick the middle if available
  if (locs.includes('4')) {
    return '4';
  }

  // Otherwise return a random choice
  return locs[Math.floor(Math.random() * locs.length)];
}


function manualTests() {
  console.log('\n Manual Tests');
  let board = new Board();
  board.display();
  board.placeHumanMarker('3');
  board.placeComputerMarker('4');
  board.placeHumanMarker('8');
  // board.placeComputerMarker(4);  // Raises an error

  board.display();
  board.copy().display();
}
manualTests();

function automatedTests() {
  console.log('\n Automated Tests');
  let board = new Board();
  board.placeHumanMarker('3');
  board.placeComputerMarker('4');
  board.placeHumanMarker('8');
  assert.equal(board.detectWinner(COMPUTER_MARKER), false);
  assert.equal(board.detectWinner(HUMAN_MARKER), false);
  board.placeComputerMarker('5');
  board.placeHumanMarker('7');
  board.placeComputerMarker('0');
  board.placeHumanMarker('6');
  assert.equal(board.detectWinner(COMPUTER_MARKER), false);
  assert.equal(board.detectWinner(HUMAN_MARKER), true);
  console.log('\n Automated Tests PASSED');
}
automatedTests();

console.log([1, 2]);
console.log(['1', '2']);


let N_WINS_TO_WIN_MATCH = 3;
let nWinsComputer = 0;
let nWinsHuman = 0;
do {
  let board = new Board();
  let isHumansTurn = !!Math.floor(Math.random() * 2);
  console.log('\n Beginning a new game!');
  // Create the loop (just to play the game once)
  while (true) {

    const nMoves = board.getAvailableLocations().size;
    console.log(`nMoves: ${nMoves}`);
    if (nMoves === 0) {
      console.log("It's a tie!");
      board.display();
      break;
    }

    // Asks human for a location (repeatedly if not available)
    if (isHumansTurn) {
      board.display();
      const move = getMoveFromHuman(board);
      board.placeHumanMarker(move);

      // Check if human won or board full
      if (board.detectWinner(HUMAN_MARKER)) {
        console.log('Congratulations, you won!!!');
        board.display();
        nWinsHuman += 1;
        break;
      }
      isHumansTurn = !isHumansTurn;
      continue;
    }

    // Asks computer AI (make a randomAI class) for a location
    if (!isHumansTurn) {
      const move = getMoveFromAI(board);
      board.placeComputerMarker(move);

      // Checks if computer won or board full
      if (board.detectWinner(COMPUTER_MARKER)) {
        console.log('The computer won.');
        board.display();
        nWinsComputer += 1;
        break;
      }
      isHumansTurn = !isHumansTurn;
    }
  }
  console.log(`Currently, you have won ${nWinsHuman} games to the computers ${nWinsComputer}.  First to win ${N_WINS_TO_WIN_MATCH} games wins the match`);
} while (nWinsComputer < N_WINS_TO_WIN_MATCH
         && nWinsHuman < N_WINS_TO_WIN_MATCH);

if (nWinsHuman >= N_WINS_TO_WIN_MATCH) {
  console.log(`Congrats, you won the match ${nWinsHuman} games to ${nWinsComputer}.`);
} else {
  console.log(`Congrats, you lost the match ${nWinsHuman} games to ${nWinsComputer}.`);
}



