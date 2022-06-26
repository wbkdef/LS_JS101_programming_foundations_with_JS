const assert = require('assert'); //must require the assert

console.log(`\n Lettercase Percentage Ratio - https://launchschool.com/exercises/71983fb9`);
// Write a function that takes a string and returns an object
// containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: string
//   output: object with 3 properties (the percentages)
//   signature:
//     letterPercentages(str) => { lowerCase: %, upperCase: %, neither: %}
//   Rules:
//     Explicit:
//       - Return percentages (so fraction times 100)
//       - String always contains at least 1 character
//     Implicit:
//       - The returned percentages are strings with two decimal places
//       - RULE2
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Use regexes to get the number of each type
//   Calculate percentages, format, and return

function letterPercentages(str) {
  const nUpper = (str.match(/[A-Z]/g) || []).length;
  const nLower = (str.match(/[a-z]/g) || []).length;
  const nNeither = (str.match(/[^a-zA-Z]/g) || []).length;
  assert.strictEqual(nUpper + nLower + nNeither, str.length);

  return {
    lowercase: (nLower * 100 / str.length).toFixed(2),
    uppercase: (nUpper * 100 / str.length).toFixed(2),
    neither: (nNeither * 100 / str.length).toFixed(2)
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


console.log(`\n Triangle Sides - https://launchschool.com/exercises/b932118f`);
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
//   Isosceles: Two sides are of equal length, while the third is different.
//     Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides
// must be greater than the length of the longest side, and every side must
// have a length greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle
// as arguments and returns one of the following four strings representing
// the triangle's classification: 'equilateral', 'isosceles', 'scalene',
// or 'invalid'.

// __PEDAC__, as per:
// __P__:
//   input: 3 Numbers
//   output: String: "equilateral", "isosceles", "scalene", "invalid"
//   signature: triangle(len1, len2, len3) => String
//   Rules:
//     Explicit:
//       - Invalid if
//           has length 0 side
//           two shorter sides sum to <= longest side
//       - Math rules for equilateral, isosceles, scalene
//     Implicit:
//       - No sides are infinite
//       - RULE2
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Create a sorted array of the 3 side lengths
//   Check if invalid (and return "invalid"), by checking if:
//     The largest is infinity
//     The smallest two sum to <= largest (this covers the case of 0)
//   Check if equilateral by checking that all equal
//   Check if isosceles by checking if the two smallest or largest are equal
//   Return "scalene" if none of the others

function triangle(len1, len2, len3) {
  [len1, len2, len3] = [len1, len2, len3].sort((el1, el2) => el1 - el2);
  if (len1 + len2 <= len3) {
    return "invalid";
  } else if (len1 === len2 && len2 === len3) {
    return "equilateral";
  } else if (len1 === len2 || len2 === len3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"


console.log(`\n Tri-Angles - https://launchschool.com/exercises/4a3e10a1`);

// A triangle is classified as follows:

// Right: One angle is a right angle(exactly 90 degrees).
//   Acute: All three angles are less than 90 degrees.
//     Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be
// exactly 180 degrees, and every angle must be greater than 0.
// If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle
// as arguments and returns one of the following four strings
// representing the triangle's classification:
// 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have
// to worry about floating point errors.You may also assume that the
// arguments are in degrees.

// __PEDAC__, as per:
// __P__:
//   input: 3 integer angles in degrees
//   output: 'right', 'acute', 'obtuse', or 'invalid'
//   signature: triangle(a1, a2, a3) => 'right', 'acute', 'obtuse', or 'invalid'
//   Rules:
//     Explicit:
//       - To be valid, all angles > 0 and sum to 180
//       - If valid is 'right'/'acute'/'obtuse' if largest angle is =/</> 90.
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Sort the angles
//   Check valid by checking that smallest angle > 0, and sum to 180
//   If valid, return 'right'/'acute'/'obtuse' if largest angle is =/</> 90


function triangle2(a1, a2, a3) {
  [a1, a2, a3] = [a1, a2, a3].sort((el1, el2) => el1 - el2);
  if (a1 <= 0 || a1 + a2 + a3 !== 180) {
    return "invalid";
  } else if (a3 < 90) {
    return "acute";
  } else if (a3 === 90) {
    return "right";
  } else {
    return "obtuse";
  }
}
console.log(triangle2(60, 70, 50));       // "acute"
console.log(triangle2(30, 90, 60));       // "right"
console.log(triangle2(120, 50, 10));      // "obtuse"
console.log(triangle2(0, 90, 90));        // "invalid"
console.log(triangle2(50, 50, 50));       // "invalid"


console.log(`\n --------------- Unlucky Days --------------- `);
// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: int (The year)
//   output: int (The # of Fri. 13ths in that year)
//   signature: fridayThe13ths(year) => n13ths
//   Rules:
//     Explicit:
//       - Can assume the Gregorian calendar
//       - 
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Create a date for the 13th of each month of the year
//   Check if it is a Friday, and if so increment a counter
//   Return the counter
function fridayThe13ths(year) {
  let nFri = 0;
  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13);
    if (date.toString().slice(0, 3) === 'Fri') {
      nFri += 1;
    }
    // console.log(date.toString().slice(0, 3));
    // console.log(date);
  }
  return nFri;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2


console.log(`\n --------------- Next Featured Number Higher than a Given Value --------------- `);
// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: int
//   output: The next integer greater than the input that is a featured number
//   signature: featured(num) => num
//   Rules:
//     Explicit:
//       - A featured number is:
//          - A multiple of 7
//          - An odd number
//          - Has no repeated digits
//       - Return an error message if there's no next feature number
//          - The largest possible featured number is 9876543201.
//          - ** I assume this means return a string error message.
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Create a function to detect if a number is a featured number
//   Iterate a proposed number from the current number + 1 until the feature number fcn returns true, then return that number.

function hasNoRepeatedDigits(num) {
  const ns = num.toString();
  return ns.length === (new Set(ns)).size;
}
// console.log(hasNoRepeatedDigits(23));
// console.log(hasNoRepeatedDigits(24));
// console.log(hasNoRepeatedDigits(22));

function isFeaturedNumber(num) {
  return num % 7 === 0 && num % 2 === 1 && hasNoRepeatedDigits(num);
}
// console.log(isFeaturedNumber(7));  // is a featured number
// console.log(isFeaturedNumber(14));  // is a featured number
// console.log(isFeaturedNumber(21));  // is a featured number
// console.log(isFeaturedNumber(49));  // is a featured number
// console.log(isFeaturedNumber(98));  // is not(it is not odd),
// console.log(isFeaturedNumber(97));  // is not(it is not a multiple of 7), and
// console.log(isFeaturedNumber(133));  // is not(the digit 3 appears twice).

function featured(num) {
  if (num >= 9876543201) {
    return "There is no possible number that fulfills those requirements.";
  }
  while (true) {
    num += 1;
    if (isFeaturedNumber(num)) {
      return num;
    }
  }
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."


console.log(`\n --------------- Sum Square - Square Sum --------------- `);

// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: positive num
//   output: num (diff)
//   signature: sumSquareDifference(num) => diff
//   Rules:
//     Explicit:
//       - retunr the difference between 
//            1) the square of all numbers up to and including that number and 
//            2) the sum of the squares of all numbers up to and including that number
//       - i.e. sumSquareDifference(3) => 22 === (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
//     Implicit:
//       - The input, num, is a non-negative integer
//       - if 0, return 0
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Create 2 functions to:
//      Calculate the sum of the first `num` numbers
//      Calculate the sum of the first `num` numbers squared
//
//   RESTART
//      Create function sumFirstToPow(num, pow)
//      Return:  sumFirstToPow(num, 1) ** 2 - sumFirstToPow(num, 2)

function sumFirstNumsToPow(num, pow) {
  let sum = 0;
  for (let ind = 1; ind <= num; ind++) {
    sum += ind ** pow;
  }
  return sum;
}
// console.log(sumFirstNumsToPow(3, 1));  // 6
// console.log(sumFirstNumsToPow(3, 2));  // 14

function sumSquareDifference(num) {
  return (sumFirstNumsToPow(num, 1) ** 2) - sumFirstNumsToPow(num, 2);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150


console.log(`\n --------------- Bubble Sort --------------- `);
// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: Array
//   output: Nothing (Array sorted in place)
//   signature: bubbleSort(Array) => undefined
//   Rules:
//     Explicit:
//       - Do bubble sort
//       - Sort in place
//     Implicit:
//       - Returns undefined
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Given by the problem
//   Outer do-while loop, that keeps track of if any changes made
//      and terminates if not
//   Inner for loop iterates through the entire array from start to finish,
//      swapping pairs if not ordered

function bubbleSort(arr) {
  let swapMade;
  do {
    swapMade = false;
    for (let ind = 0; ind < arr.length - 1; ind++) {
      if (arr[ind] > arr[ind + 1]) {
        [arr[ind], arr[ind + 1]] = [arr[ind + 1], arr[ind]];
        swapMade = true;
      }
    }
  } while (swapMade);
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


console.log(`\n --------------- Longest Sentence --------------- `);
// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: str
//   output: None (but log the longest sentence and its word count)
//   signature: longestSentence(str) => undefined (stuff logged)
//   Rules:
//     Explicit:
//       - Sentences can end in any of ".?!"
//       - Print the longest sentence (based on word count)
//          - Words are anything delimited by spaces
//       - When print the sentence, include its punctuation
//       - Print also the word count of the longest sentence
//     Implicit:
//       - RULE1
//       - RULE2
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   See if can Regex match all the sentences, then compare them for length.
//   PSEUDO_CODE_HERE

function longestSentence(str) {
  const matches = str.match(/\S[^\.\?!]+./g);
  console.log(matches);
  const lengths = matches.map(sentence => sentence.split(' ').length);
  console.log(lengths);
  let nWords = Math.max(...lengths);
  console.log(matches[lengths.indexOf(nWords)]);
  console.log(`The longest sentence has ${nWords} words.`);
}

longestSentence("Where do you think you're going. What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.


// TRY DOING THIS PROBLEM AGAIN, BUT USING REDUCE
function longestSentenceReduceApproach(str) {
  let sentences = str.match(/\S.*?[!?.]/g);

  const res = sentences.reduce(
    function (pv, sentence) {
      const length = sentence.split(' ').length;
      if (length > pv.length) {
        pv.length = length;
        pv.sentence = sentence;
      }
      return pv;
    },
    {length: 0, sentence: ""});
  console.log('\n');
  console.log(res.sentence);
  console.log(`The longest sentence has ${res.length} words.`);
}