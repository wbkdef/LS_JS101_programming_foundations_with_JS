const readLineSync = require('readline-sync');


console.log(`\n Double Char (Part 1)`);
// Make an array of each character twice
// Join the array into a string
function repeater(str) {
  const chars = [];
  for (const char of str) {
    chars.push(char + char);
  }
  return chars.join('');
}
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
