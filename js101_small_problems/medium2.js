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
