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


console.log(`\n Double Char (Part 2)`);
// Make an array of each character twice (or once if a vowel)
// Join the array into a string
// THIS IS INCORRECT, BC STILL DOUBLING WHITE SPACE, DIGITS, ETC.
const consonants = new Set();
for (const char of 'abcdefghijklmnopqrstuvwxyz') {
  if (!'aeiou'.includes(char)) {
    consonants.add(char)
  }
}
console.log(consonants);
function doubleConsonants(str) {
  const chars = [];
  for (const char of str) {
    chars.push(char);
    if (consonants.has(char)) {
      chars.push(char);
    }
  }
  return chars.join('');
}
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


console.log(`\n Reverse Number`);
// Convert to string and then an array of digits
// Reverse the order
// Join back into a string then cast to a number
function reverseNumber(num) {
  const digits = Array.from(String(num));
  digits.reverse();
  return Number(digits.join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1


console.log(`\n Get The Middle Character`);
// Do the two cases separately
// Figure out how to modify str.length/2 slightly to slice out the portion desired
/**
 * Extracts the center one or two characters from a string
 * @param {String} str String to extract characters from
 * @returns {String}
 */
function centerOf(str) {
  if (str.length % 2 === 0) {
    return str.slice(str.length / 2 - 1,  str.length / 2 + 1);
  } else {
    // return str.slice(str.length / 2 - .5,  str.length / 2 + .5);
    return str[str.length / 2 - .5];
  }
}
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"