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


console.log(`\n ==================== Get The Middle Character ====================`);
function negative(num) {
  return -Math.abs(num);
}
console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0


console.log(`\n ==================== Counting Up ====================`);
function sequence(num) {
  const arr = [];
  for (let ind = 1; ind <= num; ind++) {
    arr.push(ind);
  }
  return arr
}
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]


console.log(`\n ==================== Name Swapping ====================`);
function swapName(firstNameLastName) {
  return firstNameLastName.split(' ').reverse().join(', ');
}
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"


console.log(`\n ==================== Sequence Count ====================`);
function sequence(count, startingNum) {
  const seq = [];
  for (let ind = 1; ind <= count; ind++) {
    seq.push(ind * startingNum);
  }
  return seq;
}
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []


console.log(`\n ==================== Reverse It (Part 1) ====================`);
function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"


console.log(`\n ==================== Reverse It (Part 1) ====================`);
function reverseWords(str) {
  return str
    .split(' ')
    .map(word => {
      if (word.length < 5) {
        return word;
      }
      return word.split('').reverse().join('');
    })
    .join(' ');
}
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"


console.log(`\n ==================== Reversed Arrays ====================`);
function reverse(arr) {
  for (let ind = 0; ind < arr.length / 2; ind++) {
    [arr[ind], arr[arr.length - 1 - ind]] = [arr[arr.length - 1 - ind], arr[ind]];
  }
  return arr;
}
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true


console.log(`\n ==================== Matching Parentheses? ====================`);
// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: A string
//   output: True or false, depending on whether the parentheses are balanced
//   signature: isBalanced(str) => boolean
//   Rules:
//     Explicit:
//       - "(" comes before ")"
//       - "(" must be 'closed' by ")"
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
//   TEST_CASES_HERE_INCLUDE_EDGE_CASES
//   TEST_CASES_HERE_INCLUDE_EDGE_CASES
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   PSEUDO_CODE_HERE
//   PSEUDO_CODE_HERE
function isBalanced(str) {
  let n_unmatched = 0;
  for (const char of str.split('')) {
    if (char === '(') {
      n_unmatched += 1;
    } else if (char === ')') {
      n_unmatched -= 1;
    }
    if (n_unmatched < 0) {
      return false;
    }
  }
  
  return n_unmatched === 0;
}
Math.min(...[1, 2, 3, 4]);

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);


// https://launchschool.com/exercises/8249329a
console.log(`\n ==================== Delete Vowels ====================`);
function removeVowels(strs) {
  return strs.map(str => str.replace(/[aeiou]/gi, ''))
}
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


console.log(`\n Lettercase Counter, TRY 2 - https://launchschool.com/exercises/6a9bb11e`);
// Use a global regex to get all matches of each of the 3 types
// Return the lengths of the matches in an object
/**
 @param {String} string
 */
function letterCaseCount2(string) {
  return {
    lowercase: (string.match(/[a-z]/g) || []).length, 
    uppercase: (string.match(/[A-Z]/g) || []).length, 
    neither: (string.match(/[^a-z]/ig) || []).length, 
  }
}

console.log(letterCaseCount2('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount2('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount2('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount2(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


console.log();
const arr = [1, 2, 3];
arr.extra = "my extra propery";
for (const val of arr) {
  console.log(val);
}


