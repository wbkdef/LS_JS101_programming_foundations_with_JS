console.log('\n ---------------- 1 ---------------- ')

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// __PEDAC__, as per:
// __P__:
//   input: Array<Integer>
//   output: Array<Integer>
//   signature: smallerNumbersThanCurrent(nums) => how many unique numbers smaller than each num
//   Rules:
//     Explicit:
//       - Return a new array with how many unique numbers in the array are smaller than each number in the array.
//       - Numbers aren't smaller than themselves (strict inequality)
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Use a Set to get all the numbers uniquely
//   Iterate through the original array.  for each element of the original array:
//     count how many elements of the set are smaller than that element.
//     Add the result to a new array and return.

function smallerNumbersThanCurrent(nums) {
  const uniqueNums = [...new Set(nums)];
  // console.log(`uniqueNums: ${uniqueNums}`);
  return nums.map(num => uniqueNums.filter(un => un < num).length);
}

// Examples:
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]
console.log(smallerNumbersThanCurrent([])); // []


console.log('\n ---------------- 2 ---------------- ')
// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: Array<int>
//   output: int (the minimum sum of 5 consecutive elements)
//   signature: minimumSum(ints) => int
//   Rules:
//     Explicit:
//       - If fewer than 5 elements, return null
//       - Otherwise return the minimum of 5 consecutive elements
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Check for < length 5, if so return null
//   Do a for loop from 0 to < length - 5;
//     Slice out 5 elements at a time and sum them.
//     Keep track of the minimum such sum and return that.

function minimumSum(nums) {
  if (nums.length < 5) {
    return null;
  }
  
  let minSum = Infinity;
  for (let ind = 0; ind < nums.length - 4; ind++) {
    let toSum = nums.slice(ind, ind + 5);
    minSum = Math.min(minSum, toSum.reduce((pv, cv) => pv + cv, 0));
    // console.log(toSum);
    
  }
  console.log(minSum);
  return minSum
}

// Examples:
console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".


console.log('\n ---------------- 3 ---------------- ')
// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// __PEDAC__, as per:
// __P__:
//   input: str
//   output: str, modified capitalization
//   signature: toWeirdCase(str) => str
//   Rules:
//     Explicit:
//       - Every 2nd word is modified, starting with the 2nd word.
//       - Every 4th character is capitalized, starting with the 4th character.
//       - The capitalization of other characters is not changed
//     Implicit:
//       - Words are delimited by a single space
//       - RULE2
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Split into words.  Then map each word:
//      To itself if an even index
//      To itself with weird capitalization if odd index:
//        SUBROUTINE Split into characters and map each character:
//          To itself capitalized if is equal to 3 mod(4):
//          To itself otherwise
//        Join the characters into a string
//      Join the words into a string

function capitalizeEvery4th(word) {
  return word.split('').map((char, ind) => {
    return ind % 4 === 3 ? char.toUpperCase() : char;
  }).join('');
}

function toWeirdCase(str) {
  return str.split(' ')
    .map((word, ind) => (ind % 2 === 0) ? word : capitalizeEvery4th(word))
    .join(' ');
}

// Examples:
console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
  'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
  'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
  'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log( toWeirdCase('') === '');

// The tests above should print "true".


console.log('\n ---------------- 4 ---------------- ');
// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// __PEDAC__, as per:
// __P__:
//   input: Array<integers>
//   output: Array<2 integers>
//   signature: closestNumbers(nums) => 2Nums
//   Rules:
//     Explicit:
//       - Returns the 2 numbers that are closest together in value
//       - 
//     Implicit:
//       - If have 2 of the same number, you can return those.
//       - Assume break ties arbitrarily?
//       - Assume input array always has at least 2 numbers
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Sort a copy of the array numerically.
//   Iterate through adjacent pairs and return the closest
//     Keep track of min distance and pair so far
//     If can beat it with the current pair, update the min distance and pair

function closestNumbers(nums) {
  nums = nums.slice();
  nums.sort((a, b) => a - b);
  let bestVal = Infinity;
  let bestPair = null;
  for (let ind = 0; ind < nums.length - 1; ind++) {
    let separation = Math.abs(nums[ind] - nums[ind + 1]);
    if (separation < bestVal) {
      bestVal = separation;
      bestPair = [nums[ind], nums[ind + 1]];
    }
  }
  return bestPair;
}

// Examples:
console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]


console.log('\n ---------------- 5 ---------------- ');
// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: A string
//   output: The character that occurs first among the characters that occur least often
//   signature: leastCommonChar(str) => char
//   Rules:
//     Explicit:
//       - Ignore case
//       - It can be space (or other chars)
//     Implicit:
//       - Return a lower case char
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Create an object `counts`
//   Iterate through the characters and tally their counts in `counts`
//   Find the minimum count in `counts`
//   Find the first char in `counts` that has this minimum count

function leastCommonChar(str) {
  let counts = {};
  for (const char of str.toLowerCase()) {
    counts[char] = (counts[char] || 0) + 1;
  }
  let minCount = Math.min(...Object.values(counts));
  const ret = Object.keys(counts).find(char => counts[char] === minCount);
  return ret;
}

// Examples:
console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") === "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".