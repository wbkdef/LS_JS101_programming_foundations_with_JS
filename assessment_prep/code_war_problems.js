// __PEDAC__, as per:
// __P__:
//   input: An array of integers
//   output: An integer (the # of pairs)
//   signature: numPairs(ints) => int
//   Rules:
//     Explicit:
//       - Count the number of pairs of integers occurring more than once in the array
//       - An integer can only be part of one such pair.
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Create a Set and a count variable.
//   Iterate through the integers in the array.
//      If not in the set, add to the set.
//      If is in the set, remove from the set and increment the count variable.
//   Return the count variable.

function numPairs(ints) {
  let singles = new Set();
  let count = 0;
  for (const int of ints) {
    if (singles.has(int)) {
      count += 1;
      singles.delete(int);
    } else {
      singles.add(int);
    }
  }
  return count;
}

console.log(numPairs([1, 2, 5, 6, 5, 2]));  // 2
console.log(numPairs([1, 2, 2, 20, 6, 20, 2, 6, 2]));  // 4
console.log(numPairs([1, 2, 2, 20, 6, 20, 6, 2]));  // 3
console.log(numPairs([1, 2]));  // 0
console.log(numPairs([1]));  // 0
console.log(numPairs([]));  // 0


// __PEDAC__, as per:
// __P__:
//   input: fullText, searchText
//   output: int
//   signature: solution(fullText, searchText) => int
//   Rules:
//     Explicit:
//       - Find and return the # of times the searchText appears in the fullText
//     Implicit:
//       - If you have overlapping substrings of the text that match the search string, do you count them all?  Yes
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Keep finding the index of the searchString in the text (starting one after the last match)
//   Return the number of times that find it.

console.log(solution('aa_bb_cc_dd_bb_e', 'bb')); // should return 2 since bb shows up twice
console.log(solution('aaabbbcccc', 'bbb'));  // should return 1
console.log(solution('aaabbbbbcccc', 'bbb'));  // should return 3
console.log(solution('aaabbcccc', 'bbb'));  // should return 1
console.log(solution('a', 'bbb'));  // should return 1
console.log(solution('', 'bbb'));  // should return 1

function solution(fullText, searchText) {
  let nSubstrings = 0;
  let startFrom = 0;
  while (true) {
    startFrom = fullText.indexOf(searchText, startFrom) + 1;
    console.log(`startFrom=${startFrom}`);
    if (startFrom > 0) {
      nSubstrings += 1;
    } else {
      return nSubstrings;
    }
  }
}


// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// __PEDAC__, as per:
// __P__:
//   input: A string
//   output: An int (length longest substring)
//   signature: lenLongestVowelSubStr(string) => int
//   Rules:
//     Explicit:
//       - Vowels are aeiou
//       - Only lower case alphabetical characters in string
//     Implicit:
//       - Return 0 if no vowels
//       - RULE2
// __E__:
console.log(lenLongestVowelSubStr('aeukdosfs'));  // 3
console.log(lenLongestVowelSubStr('hello'));  // 1
console.log(lenLongestVowelSubStr('codewarriors'));  // 2
console.log(lenLongestVowelSubStr(''));  // 0
console.log(lenLongestVowelSubStr('kdafds'));  // 0
//   TEST_CASES_HERE_INCLUDE_EDGE_CASES
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Get all matches of just vowels
//   Map them to their lengths
//   Take the maximum

function lenLongestVowelSubStr(str) {
  const matches = (str.match(/[aeiou]+/ig) || []);
  matches.push('');
  return Math.max(...matches.map(ss => ss.length));
}


// Given a string of integers, return the number of odd-numbered substrings that can be formed.
// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.
// solve("1341") = 7. See test cases for more examples.

// __PEDAC__, as per:
// __P__:
//   input: A string of digits (an integer)
//   output: An int (the count of substrings that are odd integers)
//   signature: numOddSubStrs(str) => int
//   Rules:
//     Explicit:
//       - Count and return the total # of substrs that correspond to odd integers
//       - 
//     Implicit:
//       - Can include the same odd substr more than once if it occurs as a substr more than once
//       - Has to be a +ve integer that taking substr of
//       - It's a string of digits (not integers)
// __E__:
console.log(numOddSubStrs("1341"));  // 7
console.log(numOddSubStrs("134"));  // 3
console.log(numOddSubStrs("2134"));  // 5
console.log(numOddSubStrs("264"));  // 0
console.log(numOddSubStrs(""));  // 0
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   initialize count=0
//   iterate through the digits.  
//      If the nth digit is odd, increase count by n
//   return count

function numOddSubStrs(digits) {
  let count = 0;
  for (let ind = 0; ind < digits.length; ind++) {
    const num = Number(digits[ind]);
    if (num % 2 === 1) {
      count += ind + 1;
    }
  }
  return count;
}


// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: 
//   output: 
//   signature: () => 
//   Rules:
//     Explicit:
//       - 
//       - 
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