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


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// __PEDAC__, as per:
// __P__:
//   input: A number
//   output: Number - Sum of multiples of 3/5  that less Number
//   signature: sumMultsOfSmaller3sOr5s(Number) => Number
//   Rules:
//     Explicit:
//       - Return the Sum of all multiples of 3 or 5 that are strictly less than Number
//       - If a number is a multiple of both, include it only once in the sum.
//       - If a -ve number is passed in, return 0;
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
console.log(sumMultsOfSmaller3sOr5s(-1));  // 0
console.log(sumMultsOfSmaller3sOr5s(2));  // 0
console.log(sumMultsOfSmaller3sOr5s(5));  // 3
console.log(sumMultsOfSmaller3sOr5s(10));  // 23
console.log(sumMultsOfSmaller3sOr5s(20));  // 78

// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Initialize a `sum` variable
//   Do a for loop iterating through all numbers < `Number`
//      If the number is a multiple of 3 or 5 add it to `sum`
//   Return `sum`

function sumMultsOfSmaller3sOr5s(num) {
  let sum = 0;
  for (let ind = 0; ind < num; ind++) {
    if ((ind % 3 === 0) || (ind % 5 === 0)) {
      sum += ind;
    }
    console.log(`sum is ${sum}`);
  }
  return sum;
}


// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: Array<Number>
//   output: Number
//   signature: findUniq(nums) => num
//   Rules:
//     Explicit:
//       - All numbers are the same, except one
//       - Need to worry about performance (large arrays)
//       - There are at least 3 numbers
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
console.log(findUniq([1, 1, 1, 2, 1, 1]) === 2);
console.log(findUniq([0, 0, 0.55, 0, 0]) === 0.55);
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Create a hash from numbers to their counts
//   Iterate through all the numbers in the array, tallying their counts
//   Return the number that has a count of 1

function findUniq(nums) {
  let counts = {};
  let singleNum = null;
  for (const num of nums) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] === 1) {
      singleNum = num;
    }
  }
  return singleNum;
}


// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// __________PEDAC__________, as per:
// __P__:
//   input: 2 arrays (of numbers?)
//   output: boolean
//   signature: comp(a, b) => boolean
//   Rules:
//     Explicit:
//       - If there is a 1-1 correspondence between elements of a & b, where the element of b is the corresponding element of a squared, return `true`, else `false`.
//       - 
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
const a = [121, 144, 19, 161, 19, 144, 19, 11]
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(a, b));  // true
console.log(comp([121, 144, 19, 161, 19, 144, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));  // false
console.log(comp([121, 144, 19, 161, 19, 144, 11], [121, 14641, 20736, 361, 25921, 361, 20736]));  // true
console.log(comp([11], [121]));  // true
console.log(comp([], [121]));  // false
console.log(comp([], []));  // true
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Create object `multiplicities = {};`
//   Run through elements of `a`.  
//      For each value in `a`, increase the multiplicity of that value squared by 1 in multiplicities.
//   Run through elements of `b`.  
//      For each value in `b`, decrease the multiplicity of that value by 1 in multiplicities.
//        If decreased to 0, remove from the object
//   Return `true` iff the object has no keys.

function comp(a, b) {
  let multiplicities = {};
  for (const av of a) {
    multiplicities[av ** 2] = (multiplicities[av ** 2] || 0) + 1;
  }
  for (const bv of b) {
    multiplicities[bv] = (multiplicities[bv] || 0) - 1;
  }
  return Object.values(multiplicities).filter(val => val !== 0).length === 0;
}


// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.



// __________PEDAC__________, as per:
// __P__:
//   input: String
//   output: Boolean (is pangram)
//   signature: isPangram(str) => boolean
//   Rules:
//     Explicit:
//       - Return true/false if is/isn't a pangram
//           - A pangram is a string that contains every letter of the alphabet 
//             - (ignoring case, and possibly other characters as well)
//       - 
//       - 
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
console.log(isPangram("The quick brown fox jumps over the lazy dog"));  // True
console.log(isPangram("he quick brown fox jumps over he lazy dog"));  // False
console.log(isPangram("The dog"));  // False
console.log(isPangram(""));  // False
console.log(isPangram("abCDEfghijklmnopqrsTUVwxyz #*932!!"));  // True
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Initialize a set of all characters in the alphabet.
//   Each time a character occurs in the string (case insensitive), remove from the set
//   Return true iff the set is empty at the end

function isPangram(str) {
  let chars = new Set("abCDEfghijklmnopqrsTUVwxyz".toLowerCase());
  for (const char of str.toLowerCase()) {
    if (chars.has(char)) {
      chars.delete(char);
    }
  }
  return chars.size === 0;
}


// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240
// The input string always has more than five digits.

// Adapted from Project Euler.

// __________PEDAC__________, as per:
// __P__:
//   input: string of integers
//   output: integer (the greatest product of 5 consecutive integers from the input string)
//   signature: greatestProduct(str) => int
//   Rules:
//     Explicit:
//       - str always has > 5 digits
//       - return the greatest product of 5 consecutive integers from the input string
//     Implicit:
//       - Only digits in the str
//       - RULE2
// __E__:
//   *Given*
console.log(greatestProduct("123834539327238239583")); // should return 3240
console.log(greatestProduct("1234512")); // should return 120
console.log(greatestProduct("1234112")); // should return 24
console.log(greatestProduct("1111112")); // should return 2
console.log(greatestProduct("32111112")); // should return 6
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Prepend '11111' to the string
//   Initialize a `product` variable to `1`
//   Iterate from index 5 to the end of the string, at each step:
//      multiplying the product variable by the int at the current index, AND
//      dividing the product variable by the int at the current index -5
//   During the iteration above, keep trackof the maximum value of `product` and return;

function greatestProduct(digits) {
  let product = 1;
  let maxProduct = 1;
  digits = '11111' + digits;
  for (let ind = 5; ind < digits.length; ind++) {
    product *= digits[ind];
    product /= digits[ind - 5];
    maxProduct = Math.max(maxProduct, product);
  }
  return maxProduct;
}


// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// __________PEDAC__________, as per:
// __P__:
//   input: string
//   output: string with modified capitalization
//   signature: toWeirdCase(str) => str
//   Rules:
//     Explicit:
//       - Words are separated by a ' '
//       - Each word should be "cased" so that the characters at 
//           - even indices are upper case
//           - odd indices are lower case
//       - Will only have spaces and alphabetical characters.
//     Implicit:
//       - If no alphabetical characters, leave unchanged
//       - RULE2
// __E__:
//   *Given*
console.log(toWeirdCase("String"));//=> returns "StRiNg"
console.log(toWeirdCase("Weird string case"));//=> returns "WeIrD StRiNg CaSe"
console.log(toWeirdCase(" ") === ' ');// ' '
console.log(toWeirdCase("") === '');// ''
console.log(toWeirdCase("sTring"));// 'StRiNg'
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Split into words
//   For each word
//      Capitalize/Lower Case the even/odd index characters.
//   Join words with a ' ' and returns

function toWeirdCase(str) {
  return str.split(' ').map(word => {
    return word.split('').map((char, ind) =>
      ind % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ).join('');
  }).join(' ');
}


// For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

// The input string consists of lowercase latin letters.

// Your function should return :

// a tuple (t, k) (in Python)
// an array [t, k] (in Ruby and JavaScript)
// in C, return k and write to the string t passed in parameter

// Example #1:

// for string

// s = "ababab";
// the answer is

// ["ab", 3]

// Example #2:

// for string

// s = "abcde"
// the answer is

// ["abcde", 1]
// because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.

// __________PEDAC__________, as per:
// __P__:
//   input: string
//   output: [substr, int]
//   signature: findMinSubStr(str) => [substr, int]
//   Rules:
//     Explicit:
//       - Find the minimum substr such that the original string is it repeated a bunch of times.
//       - Also return the number of multiples of that string needed to concatenate into the original string
//       - The input string consists of lowercase latin letters (alphabetical?).
//     Implicit:
//       - Won't have a missing argument
//       - Assume input string not empty
// __E__:
//   *Given*
console.log(findMinSubStr("ababab"));  // ["ab", 3]
console.log(findMinSubStr("abcde"));  // ["abcde", 1]
console.log(findMinSubStr("abcabc"));  // ["abcde", 2]
console.log(findMinSubStr("ababe"));  // ["abcde", 1]
console.log(findMinSubStr("aa"));  // ["a", 2]
console.log(findMinSubStr("a"));  // ["a", 1]
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   iterate subStrLen from 1 to str.length
//     if str.length % subStrLen is not 0, then continue
//     find str.length / subStrLen and repeat the first subStrLen charactersof str that many times
//        Compare str to this repeated substr.  If equal, return [the first subStrLen charactersof str, str.length / subStrLen]
//   It should always return at some point in the loop

function findMinSubStr(str) {
  for (let subStrLen = 1; subStrLen <= str.length; subStrLen++) {
    if (str.length % subStrLen !== 0) {
      continue;
    }
    const subStr = str.slice(0, subStrLen);
    const nRepeats = str.length / subStrLen;
    if (subStr.repeat(nRepeats) === str) {
      return [subStr, nRepeats];
    }
  }
  return "fell through - SHOULDN'T DO THIS!";
}


Task:
// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// Notes
// List size is at least 2 .

// List's numbers will only positives (n > 0) .

// Repetition of numbers in the list could occur .

// The newer list's sum should equal the closest prime number .

// Input >> Output Examples
// 1- minimumNumber ({3,1,2}) ==> return (1)
// Explanation:
// Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .
// 2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
// Explanation:
// Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
// 3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
// Explanation:
// Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .

// __________PEDAC__________, as per:
// __P__:
//   input: An Array of integers
//   output: An integer
//   signature: toSumToPrime(ints) => int
//   Rules:
//     Explicit:
//       - All elements in the array are +ve (including the number you come up with).
//       - The new list's sum (with the extra number) should equal the next prime
//     Implicit:
//       - If the sum is already a prime?  Find the next prime bigger than
//       - RULE2
// __E__:
//   *Given*
console.log(toSumToPrime([3, 1, 2]));  // 1
console.log(toSumToPrime([2, 12, 8, 4, 6]));  // 5
console.log(toSumToPrime([50, 39, 49, 6, 17, 28]));  // 2
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Create SUBROUTINE isPrime(int)
//   Calculate the sum of the Array so far
//   Iterate `el` from 1 up.
//   If `sum + el` is prime, return `el`

function isPrime(int) {
  for (let factor = 2; factor <= int ** .5; factor++) {
    if (int % factor === 0) {
      return false;
    }
  }
  return true;
}
// console.log(`2: ${isPrime(2)}`);
// console.log(`3: ${isPrime(3)}`);
// console.log(`4: ${isPrime(4)}`);
// console.log(`5: ${isPrime(5)}`);
// console.log(`6: ${isPrime(6)}`);
// console.log(`7: ${isPrime(7)}`);
// console.log(`8: ${isPrime(8)}`);
// console.log(`9: ${isPrime(9)}`);
// console.log(`10: ${isPrime(10)}`);
// console.log(`11: ${isPrime(11)}`);
// console.log(`12: ${isPrime(12)}`);

function toSumToPrime(ints) {
  const sum = ints.reduce((pv, cv) => pv + cv, 0);
  for (let next = 0; true; next++) {
    if (isPrime(sum + next)) {
      return next;
    }
  }
}


// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// __________PEDAC__________, as per:
// __P__:
//   input: A string
//   output: int
//   signature: countDistinctDuplicates(str) => int
//   Rules:
//     Explicit:
//       - Str only contains alphabetical and numerical characters
//       - Return a count of the number of distinct characters occuring more than once
//       - Case insensitive
//     Implicit:
//       - Empty string => 0
//       - Can assume a string passed in.
// __E__:
//   *Given*
console.log(countDistinctDuplicates("abcde"));  // 0
console.log(countDistinctDuplicates("aabbcde"));  // 2
console.log(countDistinctDuplicates("aabBcde"));  // 2
console.log(countDistinctDuplicates("indivisibility"));  // 1
console.log(countDistinctDuplicates("Indivisibilities"));  // 2
console.log(countDistinctDuplicates("aA11"));  // 2
console.log(countDistinctDuplicates("ABBA"));  // 2
console.log(countDistinctDuplicates("ABBCACA"));  // 3
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Lower case the string
//   Create an object and count up all the characters
//   Filter for values >= 2
//   Return the length of these values

function countDistinctDuplicates(str) {
  str = str.toLowerCase();
  let counts = {};
  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return Object.values(counts).filter(val => val >= 2).length;
}


// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

// __________PEDAC__________, as per:
// __P__:
//   input: Array<Number>
//   output: integer (an index)
//   signature: sumsEqualIndex() => 
//   Rules:
//     Explicit:
//       - Find an index N, where the sum of numbers to the left and right are equal (excluding the number at that index).
//       - Return the lowest index if more than 1 work.
//       - If an empty array, return 0
//       - If no such index, return -1
//       - Elements of array are integers (can be -ve)
//     Implicit:
//       - Is it OK to do an innefficient solution?  No.
//       - RULE2
// __E__:
//   *Given*
console.log(sumsEqualIndex([1, 2, 3, 4, 3, 2, 1]));  // 3
console.log(sumsEqualIndex([1, 100, 50, -51, 1, 1]));  // 1
console.log(sumsEqualIndex([20, 10, -80, 10, 10, 15, 35]));  // 0
console.log(sumsEqualIndex([]));  // 0
console.log(sumsEqualIndex([40, 20, 10]));  // -1
console.log(sumsEqualIndex([1, 2, 10, -10, 10, 1, 2]));  // 2
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   If array empty, return 0
//   initialize `sumLeft` = 0
//   initialize `sumRight` = the sum of all numbers starting at index 1
//   Create a for loop start at ind=0, going to ind=length-1.
//      If sumLeft === sumRight, return ind
//      Add the current element to sumLeft, 
//      Subtract the next element from sumRight
//   Return -1

function sumsEqualIndex(ints) {
  if (ints.length === 0) {
    return 0;
  }
  let sumLeft = 0;
  let sumRight = ints.slice(1).reduce((pv, cv) => pv + cv, 0);
  for (let ind = 0; ind < ints.length; ind++) {
    if (sumLeft === sumRight) {
      return ind;
    }
    sumLeft += ints[ind];
    sumRight -= ints[ind + 1];
  }
  return -1;
}


// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

// __________PEDAC__________, as per:
// __P__:
//   input: Array<int>, number
//   output: Array<int, int>
//   signature: firstPairThatSumTo(ints, int) => pair
//   Rules:
//     Explicit:
//       - Find "first two" numbers from array that sum to the given number
//         - This means that the 2nd of two numbers occurs first.  I.e. the entire pair occurs first
//     Implicit:
//       - return undefined if no such pair exists
//       - RULE2
// __E__:
//   *Given*
console.log(firstPairThatSumTo([11, 3, 7, 5], 10));  // [3, 7]
console.log(firstPairThatSumTo([4, 3, 2, 3, 4], 6));  // [4, 2]
console.log(firstPairThatSumTo([0, 0, -2, 3], 2));  // undefined
console.log(firstPairThatSumTo([10, 5, 2, 3, 7, 5], 10));  // [3, 7]

//   TEST_CASES_HERE_INCLUDE_EDGE_CASES
//   TEST_CASES_HERE_INCLUDE_EDGE_CASES
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Create a set of numbers seen so far.
//   Iterate through the numbers.  For each number
//     If its "complement" to make the sum exists in the set, then return those two numbers
//     Otherwise, add it to the set
//   Return undefined

function firstPairThatSumTo(ints, sumTo) {
  let numsSeen = new Set();
  for (const int of ints) {
    if (numsSeen.has(sumTo - int)) {
      return [sumTo - int, int];
    } else {
      numsSeen.add(int);
    }
  }
  return undefined;
}


// DONE, then refreshed browser - https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript
// DONE, https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// DONE https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
// DONE https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
// DONE https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
// DONE https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
// DONE https://www.codewars.com/kata/529872bdd0f550a06b00026e/train/javascript
// DONE https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
// SKIP https://www.codewars.com/kata/53a452dd0064085711001205/train/javascript
// DONE https://www.codewars.com/kata/5491689aff74b9b292000334/train/javascript
// DONE https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript
// DONE https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// DONE https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
// DONE https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/javascript
// DONE https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript


// __________PEDAC__________, as per:
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
