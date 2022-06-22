console.log(`\n ddaaiillyy ddoouubbllee`);
// Iterate through the string
// Keep track of the last character
// If the current character is different from the last character,
//   update the last character to it and
//   add this character to an output array.
// At the end, join all characters in the output array into a string and return

function crunch(s) {
  let last_char = null;
  const out_chars = [];
  for (const c of s) {
    if (c != last_char) {
      out_chars.push(c);
      last_char = c;
    }
  }
  return out_chars.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


console.log(`\n Bannerizer`);
logInBox('To boldly go where no one has gone before.');
logInBox('');

function logInBox(s) {
  len = s.length;
  console.log('+' + '-'.repeat(len + 2) + '+');
  console.log('|' + ' '.repeat(len + 2) + '|');
  console.log('| ' + s + ' |');
  console.log('|' + ' '.repeat(len + 2) + '|');
  console.log('+' + '-'.repeat(len + 2) + '+');
}


console.log(`\n Stringy Strings`);
// repeat "10" n times, then slice out the first n characters
function stringy(n) {
  return "10".repeat(n).slice(0, n);
}
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"


console.log(`\n Fibonacci Number Location By Length`);
function findFibonacciIndexByLength(n_digits) {
  let ind = 1n;  // Current fibonacci number
  let fp = 0n;  // Previous fibonacci number
  let f = 1n;  // Current fibonacci number
  while (String(f).length < n_digits) {
    ind += 1n;
    [fp, f] = [f, f + fp];
    // console.log([fp, f]);
  }
  return ind
}
// console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
// findFibonacciIndexByLength(10000n) === 47847n;
// The last example may take a minute or so to run.


console.log(`\n ============== Right Triangles ============== `);
function triangle(int) {
  for (let ind = 1; ind <= int; ind++) {
    console.log(' '.repeat(int-ind) + '*'.repeat(ind));
  }
}
triangle(5);

//     *
//    **
//   ***
//  ****
// *****

  triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********


// console.log(`\n ============== Madlibs ============== `);
// const readLineSync = require('readline-sync');

// const noun = readLineSync.question('Enter a noun: ');
// const verb = readLineSync.question('Enter a verb: ');
// const adjective = readLineSync.question('Enter an adjective: ');
// const adverb = readLineSync.question('Enter an adverb: ');


// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb} ? That's hilarious!
// The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
// The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);

// // Enter a noun: dog
// // Enter a verb: walk
// // Enter an adjective: blue
// // Enter an adverb: quickly

// // console output
// // Do you walk your blue dog quickly ? That's hilarious!
// // The blue dog walks quickly over the lazy dog.
// // The dog quickly walks up blue Joe's turtle.


console.log(`\n ============== Double Doubles ============== `);

function isDoubleNumber(num) {
  const str = num.toString();
  if (!Number.isInteger(num) || str.length % 2 === 1) {
    return false;
  }
  return str.slice(0, str.length / 2) === str.slice(str.length / 2);
  // for (let ind = 0; ind < str.length / 2; ind++) {
  //   if (str[ind] !== str[str.length/2 + ind]) {
  //     return false;
  //   }
  // }
  // return true;
}
function twice(num) {
  return isDoubleNumber(num) ? num : num * 2
}
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676


console.log(`\n ============== Grade Book ============== `);
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
function getGrade(g1, g2, g3) {
  const avg = (g1 + g2 + g3) / 3;
  if (avg >= 90) {
    return 'A';
  } else if (avg >= 80) {
    return 'B';
  } else if (avg >= 70) {
    return 'C';
  } else if (avg >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"


console.log(`\n ============== Clean up the words ============== `);
function cleanUp(str) {
  return str.replace(/[^a-z]/ig, ' ').replace(/ +/g, ' ');
}
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "


console.log(`\n ============== What Century is That? ============== `);
function century(year) {
  let century = Math.floor((year + 99) / 100);
  return century + getCenturySuffix(century);
}
function getCenturySuffix(century) {
  if ([11, 12, 13].includes(century % 100)) {
    // b/c it's the 11th/12th/13th century, not the 11st, 12nd, 13rd
    return "th";
  }
  switch (century % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"