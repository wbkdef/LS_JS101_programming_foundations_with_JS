const readLineSync = require('readline-sync');


console.log(`\n How Old is Teddy?`);
console.log(`Teddy is ${20 + Math.round(Math.random() * 100)} years old!`);


// console.log(`\n Searching 101`);
// const nums = [];
// nums.push(Number(readLineSync.question(`Enter the 1st number:`)))
// nums.push(Number(readLineSync.question(`Enter the 2nd number:`)))
// nums.push(Number(readLineSync.question(`Enter the 3rd number:`)))
// nums.push(Number(readLineSync.question(`Enter the 4th number:`)))
// nums.push(Number(readLineSync.question(`Enter the 5th number:`)))
// const toSearchFor = Number(readLineSync.question(`Enter the last number:`));

// if (nums.includes(toSearchFor)) {
//   console.log(`The number ${toSearchFor} appears in ${nums}.`);
// } else {
//   console.log(`The number ${toSearchFor} does not appear in ${nums}.`);
// }


// console.log(`\n When Will I Retire?`);
// const age = Number(readLineSync.question(`What is your age?`));
// const retAge = Number(readLineSync.question(`At what age would you like to retire?`));
// const year = new Date().getFullYear();
// console.log(`It's ${year}. You will retire in ${year + retAge - age}.`);
// console.log(`You have only ${retAge - age} years of work to go!`);


console.log(`\n ================= Palindromic Strings (Part 1)? =================`);
// iterate from both ends and check equal.  return false if ever not equal
function isPalindrome(str) {
  return str ===  str.split('').reverse().join('');
  // for (let ind = 0; ind < str.length / 2; ind++) {
  //   if (str[ind] !== str[str.length - ind - 1]) {
  //     return false;
  //   }
  // }
  // return true;
}
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true


console.log(`\n ================= Palindromic Strings (Part 2) =================`);
/**
 * Checks if the string passed as an argument is a palindrome.  Case-insensitive, and ignores all non-alphanumeric characters.
 * @param {String} str 
 * @returns Boolean
 */
function isRealPalindrome(str) {
  str = str.replace(/[^a-z]/ig, '').toLowerCase();
  return str === str.split('').reverse().join('');
}
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false


console.log(`\n ================= Palindromic Numbers =================`);
function isPalindromicNumber(int) {
  return isPalindrome(int.toString());
}
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true


console.log(`\n ================= Running Totals =================`);
// Loop throught the elements.
// Keep adding to a running total and pushing this total into a new array
function runningTotal(nums) {
  let tots = [];
  let tot = 0;
  for (const num of nums) {
    tot += num;
    tots.push(tot);
  }
  return tots;
}
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []


console.log(`\n ================= Letter Counter (Part 1) =================`);
function wordSizes(str) {
  let wordSizes = {};
  for (const word of str.split(' ')) {
    if (word.length > 0) {
      wordSizes[word.length] = (wordSizes[word.length] || 0) + 1;
    }
  }
  return wordSizes;
}
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}


console.log(`\n ================= Letter Counter (Part 2) =================`);
function wordSizes2(str) {
  str = str.replace(/[^a-z ]/ig, '');
  console.log(`str: ${str}`);
  return wordSizes(str);
}
console.log(wordSizes2('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes2('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes2("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes2(''));                                            // {}


console.log(`\n ================= Letter Swap =================`);
function swap(str) {
  return str
    .split(' ')
    .map(word => {
      if (word.length < 2) {
        return word;
      }
      return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
    })
    .join(' ');
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"