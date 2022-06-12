const readline = require('readline-sync');

console.log('Welcome to Calculator!');

function prompt(msg) {
  console.log(`  =>  ${msg}`);
}

function invalidNumber(str) {
  return str.trim() === '' || Number.isNaN(Number(str));
}

let input;

// Ask the user for the first number.
prompt("What's the first number?");
input = readline.question();
while (invalidNumber(input)) {
  prompt("Invalid number, try again: What's the first number?");
  input = readline.question();
}
const n1 = Number(input);

// Ask the user for the second number.
prompt("What's the second number?");
input = readline.question();
while (invalidNumber(input)) {
  prompt("Invalid number, try again: What's the second number?");
  input = readline.question();
}
const n2 = Number(input);

// Ask the user for an operation to perform.
prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(`${operation} is not a valid option, please try again\nWhat operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide`);
  operation = readline.question();
}

let output;
// if (operation === '1') {  // 1 indicates addition
//   output = n1 + n2;
// } else if (operation === '2') {  // 2 indicates substraction
//   output = n1 - n2;
// } else if (operation === '3') {  // 3 indicates multiplication
//   output = n1 * n2;
// } else if (operation === '4') {  // 4 indicates division
//   output = n1 / n2;
// }

switch (operation) {
  case '1':
    output = n1 + n2;  // 1 indicates addition
    break;
  case '2':
    output = n1 - n2;  // 2 indicates substraction
    break;
  case '3':
    output = n1 * n2;  // 3 indicates multiplication
    break;
  case '4':
    output = n1 / n2;  // 4 indicates division
    break;
  default:
    throw new Error(`Unexpected input ${operation}`);
}

console.log(`The result is: ${output}`);

// Perform the operation on the two numbers.
// Print the result to the terminal.