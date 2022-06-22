console.log(`\n 1. Rotation (Part 1)`);

// Write a function that rotates an array by moving the first element
// to the end of the array.  Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: Usually an Array
//   output: An Array
//   Rules:
//     Explicit:
//       - The original array shouldn't be modified.
//       - The first element should be moved to the end
//       - For empty arrays, return empty arrays
//       - If not an array, return undefined
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   Below
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Copy the array
//   Remove the first element and add it to the end,
//   Return this array

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [];
  }

  let arr2 = [...arr];
  arr2.push(arr2.shift());
  return arr2;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]


console.log(`\n 2. Rotation (Part 2)`);
// Rotation(Part 2)
// Write a function that rotates the last count digits of a number.
// To perform the rotation, move the first of the digits that you want
// to rotate to the end and shift the remaining digits to the left.

// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: Number (integer to rotate), Number (num digits to rotate within)
//   output: Number (integer) with rotated digits
//   Rules:
//     rotateRightmostDigits(num, n_digits);
//     Explicit:
//       - Rotate the last n_digits of num
//       - This means within the last n_digits, the first becomes
//            the last and the rest move left 1.
//     Implicit:
//       - What if n_digits exceeds the number of digits in the number?
//       - RULE2
// __E__:
//   Given
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Convert to a string, then to an array of characters.
//   Slice of the last n_digits and rotate them with the prev. exercise soln
//   Combine the result with the digits not to be rotated
//   Convert back to a string then a number and return

function rotateRightmostDigits(num, nDigits) {
  const numArr = num.toString().split('');
  const numArrRotated = numArr.slice(0, -nDigits).concat(
    rotateArray(numArr.slice(-nDigits)));
  return Number(numArrRotated.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917


console.log(`\n 2. Rotation (Part 3)`);
// Take the number 735291 and rotate it by one digit to the left, getting
// 352917. Next, keep the first digit fixed in place and rotate the remaining
//  digits to get 329175. Keep the first two digits fixed in place and rotate
//  again to get 321759. Keep the first three digits fixed in place and rotate
//  again to get 321597. Finally, keep the first four digits fixed in place
//  and rotate the final two digits to get 321579.  The resulting number is
//  called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the
// maximum rotation of that integer.You can(and probably should) use the
// rotateRightmostDigits function from the previous exercise.

// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: Number (integer)
//   output: Number (maximally rotated integer)
//   signature: maxRotation(num) => Integer
//   Rules:
//     Explicit:
//       - Rotate the full number, then keep rotating the right-most digits
//            of length one less than previously.
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
//   TEST_CASES_HERE_INCLUDE_EDGE_CASES
//   TEST_CASES_HERE_INCLUDE_EDGE_CASES
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Determine the number of digits
//   Apply the previous function repeatedly, with fewer and fewer
//     right - most digits

function maxRotation(num) {
  const nDigits = num.toString().length;
  for (let ind = nDigits; ind > 0; ind--) {
    num = rotateRightmostDigits(num, ind);
  }
  return num;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845


console.log(`\n 2. Stack Machine Interpretation - https://launchschool.com/exercises/026e99f0`);
// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: A string of commands, separated by spaces
//   output: None (stuff may be printed as a side effect)
//   signature: minilang(program) => undefined
//   Rules:
//     Explicit:
//       - Laid out pretty clearly.  Don't want to copy all this.
//     Implicit:
//       - There is some kind of rounding given division.  I'll assume it's
//            Math.floor.
//       - Commands are separated by spaces.
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Split program into words
//   Initialize register and stack
//   Use a forof loop to go through the commands in order
//   Use a switch statement to deal with each command
//      The default would be that it is a number (will check this)

function minilang(program) {
  console.log(`Running program: ${program}`);

  let stack = [];
  let register = 0;
  for (let command of program.split(' ')) {
    switch (command) {
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register %= stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      default:
      {
        const num = Number(command);
        if (Number.isNaN(num)) {
          console.log(`ISSUE, EXPECTED A NUMBER BUT GOT ${command}`);
          return;
        } else {
          register = num;
        }
      }
    }
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


console.log(`\n 3. Word to Digit - https://launchschool.com/exercises/9010f84f`);
// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: string sentence
//   output: string sentence, with words like 'five' replaced with '5'
//   signature: wordToDigit(sentence) => sentence
//   Rules:
//     Explicit:
//       - Replace number words with digits
//     Implicit:
//       - Doesn't explain capitalized case.  Assume case insensitive.
//       - To be a word, I'll assume separated by non-alphabetic characters
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Use regexes?  B/c can be separated by non-space characters.
//   PSEUDO_CODE_HERE
function wordToDigit(sentence) {
  // sentence = sentence.replace(/(?<=[^a-z])zero(?=[^a-z])/ig, '0');
  // sentence = sentence.replace(/(?<=[^a-z])one(?=[^a-z])/ig, '1');
  // sentence = sentence.replace(/(?<=[^a-z])two(?=[^a-z])/ig, '2');
  // sentence = sentence.replace(/(?<=[^a-z])three(?=[^a-z])/ig, '3');
  // sentence = sentence.replace(/(?<=[^a-z])four(?=[^a-z])/ig, '4');
  // sentence = sentence.replace(/(?<=[^a-z])five(?=[^a-z])/ig, '5');
  // sentence = sentence.replace(/(?<=[^a-z])six(?=[^a-z])/ig, '6');
  // sentence = sentence.replace(/(?<=[^a-z])seven(?=[^a-z])/ig, '7');
  // sentence = sentence.replace(/(?<=[^a-z])eight(?=[^a-z])/ig, '8');
  // sentence = sentence.replace(/(?<=[^a-z])nine(?=[^a-z])/ig, '9');
  sentence = sentence.replace(/\bzero\b/ig, '0');
  sentence = sentence.replace(/\bone\b/ig, '1');
  sentence = sentence.replace(/\btwo\b/ig, '2');
  sentence = sentence.replace(/\bthree\b/ig, '3');
  sentence = sentence.replace(/\bfour\b/ig, '4');
  sentence = sentence.replace(/\bfive\b/ig, '5');
  sentence = sentence.replace(/\bsix\b/ig, '6');
  sentence = sentence.replace(/\bseven\b/ig, '7');
  sentence = sentence.replace(/\beight\b/ig, '8');
  sentence = sentence.replace(/\bnine\b/ig, '9');
  return sentence;
}
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('The weight is done. 4four five'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."