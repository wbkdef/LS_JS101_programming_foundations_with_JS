
console.log(`\n Uppercase Check - https://launchschool.com/exercises/59cd044d`);
/**
 * @param {String} str
 * @returns Whether all alphabetic characters are upper case
 */
function isUppercase(str) {
  return str === str.toUpperCase();
}
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true


console.log(`\n Delete Vowels - https://launchschool.com/exercises/8249329a`);

function removeVowelsFromString(string) {
  return string
    .replace(/a/g, '')
    .replace(/e/g, '')
    .replace(/i/g, '')
    .replace(/o/g, '')
    .replace(/u/g, '')
    .replace(/A/g, '')
    .replace(/E/g, '')
    .replace(/I/g, '')
    .replace(/O/g, '')
    .replace(/U/g, '');
}

/**
 * Returns modified input string with vowels removed
 * @param {Array<String>} string String to remove vowels from
 * @returns "string" with vowels removed
 */
function removeVowels(strings) {
  return strings.map(str => removeVowelsFromString(str));
}
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


console.log(`\n Lettercase Counter - https://launchschool.com/exercises/6a9bb11e`);
// Use a global regex to get all matches of each of the first 2 types
// Use the length of the string minus the counts of the first two types to get the third
/**
 * @param {String} string
 */
function letterCaseCount(string) {
  const lowerMatches = string.match(/[a-z]/g);
  const nLower = lowerMatches ? lowerMatches.length : 0;
  const upperMatches = string.match(/[A-Z]/g);
  const nUpper = upperMatches ? upperMatches.length : 0;
  return {
    lowercase: nLower,
    uppercase: nUpper,
    neither: string.length - nLower - nUpper
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


console.log(`\n Lettercase Counter, TRY 2 - https://launchschool.com/exercises/6a9bb11e`);
// Use a global regex to get all matches of each of the 3 types
// Return the lengths of the matches in an object
/**
 * @param {String} string
 */
function letterCaseCount2(string) {
  const matchesLowercase = string.match(/[a-z]/g) || [];
  const matchesUppercase = string.match(/[A-Z]/g) || [];
  const matchesNeither = string.match(/[^a-z]/gi) || [];
  return {
    lowercase: matchesLowercase.length,
    uppercase: matchesUppercase.length,
    neither: matchesNeither.length,
  };
}

console.log(letterCaseCount2('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount2('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount2('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount2(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


console.log(`\n Capitalize Words - https://launchschool.com/exercises/1fd9c225`);
// Split on spaces
// Capitalize the first letter of each word, lower case the rest
// Join into 1 string again and return

/**
 * Capitalizes the first letter of each word.
 * @param {String} string 
 */
function wordCap(string) {
  return string
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'


console.log(`\n Swap Case - https://launchschool.com/exercises/7d7dbbbe`);
// Go through character by character
// If lower case (regex test), change to uppercase and save to array
// ElseIf upper case (regex test), change to lowercase and save to array
// Else save to array unmodified
// Join characters into a string and return
/**
 * Returns the string with every lowercase letter changed to uppercase
 * and every uppercase letter changed to lowercase. Leaves
 * all other characters unchanged.
 * @param {String} string String to modify and return.
 */
function swapCase(string) {
  const res = string
    .split('')
    .map(char => {
      if (/[A-Z]/.test(char)) {
        return char.toLowerCase();
      } else if (/[a-z]/.test(char)) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join('');
  return res;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


console.log(`\n Staggered Caps (Part 1) - https://launchschool.com/exercises/3b0a4549`);
// Q:  Write a function that takes a string as an argument and returns that
// string with a staggered capitalization scheme.Every other character,
// starting from the first, should // be capitalized and should be followed
// by a lowercase or non - alphabetic character.  Non - alphabetic characters
// should not be changed, but should be counted as characters
// for determining when to switch between upper and lower case.

// P:
// Every 2nd char starting from the first should be capitalized, if alphabetic.
// Every 2nd char starting from the second should be lower cased, if alphabetic.

// E:
// staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
// staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
// staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
// staggeredCase('');   // ""
// staggeredCase('r');   // "R"

// D/A:
// Input as a string
// Build an array, where capitalize/lowercase if index is even/odd

// C:
function staggeredCase(str) {
  return str
    .split('')
    .map((char, ind) => ind % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
console.log(staggeredCase(''));   // ""
console.log(staggeredCase('r'));   // "R"


console.log(`\n --------------- Staggered Caps (Part 2) ---------------`);
function staggeredCase2(str) {
  let staggeredLetters = [];
  let capitalize = true;
  for (const char of str) {
    if (/[a-z]/i.test(char)) {
      staggeredLetters.push(
        capitalize ? char.toUpperCase() : char.toLowerCase());
      capitalize = !capitalize;
    } else {
      staggeredLetters.push(char);
    }
  }
  return staggeredLetters.join('');
}

console.log(staggeredCase2("I Love Launch School!"));
console.log(staggeredCase2("ALL CAPS"));
console.log( staggeredCase2("ignore 77 the 444 numbers"));

console.log(staggeredCase2("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);


console.log(`\n --------------- How long are you? ---------------`);
function wordLengths(str) {
  if (!str) {
    return [];
  }
  return str.split(' ').map(word => `${word} ${word.length}`);
}
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []


console.log(`\n --------------- Search Word (Part 1) ---------------`);
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
// function searchWord(word, txt) {
//   return txt.toLowerCase().split(' ').filter(wrd => wrd === word.toLowerCase()).length;
// }
function searchWord(word, txt) {
  const re = RegExp(`\\b${word}\\b`, 'gi');
  const matches = txt.match(re);
  return (matches || []).length;
}
console.log(searchWord('sed', text));      // 3


console.log(`\n --------------- Search Word (Part 2) ---------------`);
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';
function searchWord2(word, txt) {
  const re = RegExp(`\\b${word}\\b`, 'gi');
  return txt.replace(re, `**${word.toUpperCase()}**`);
}
console.log(searchWord2('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"