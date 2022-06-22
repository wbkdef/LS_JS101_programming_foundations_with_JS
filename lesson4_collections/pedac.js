
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: A string
//   output: An array of strings (palindromeSubstrings)
//   Rules:
//     Explicit:
//       - Cases sensitive
//       - palindromeSubstrings fcn name
//     Implicit:
//       - Doesn't seem to return length-1 palindromes
//       - Return as an array
//       - Return shorter palindromes that are part of longer ones
//       - If a palindrome occurs twice, should it be returned twice?
// __E__:
//   Included above
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Find palindromes of longer and longer lengths, starting with length 0
//     (all are palindromes).  Can store as an array of arrays of start indices.
//   Can find length 'n' palindromes by checking extensions to length
//     'n-2' palindromes.
//   Combine all length 2 and longer palindromes into a single array and return.
//     Will also need to extract the strings corresponding to the indices.