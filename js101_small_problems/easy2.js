console.log(`\n Welcome Stranger`);
function greetings(name, job) {
  return `Hello, ${name.join(' ')}! Nice to have a ${job.title} ${job.occupation} around.`
}
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.


// console.log(`\n Greeting a user`);
// const readLineSync = require('readline-sync');
// const name = readLineSync.question('What is your name? ');
// if (name.endsWith('!')) {
//   console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }


console.log(`\n Multiplying Two Numbers`);
console.log(multiply(5, 3) === 15); // logs true
// Use the multiply operator
function multiply(n1, n2) {
  return n1 * n2;
}


console.log(`\n Squaring an Argument`);
const square = n  =>  multiply(n, n);
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true


// console.log(`\n Arithmetic Integer`);
// const readLineSync = require('readline-sync');
// const n1 = Number(readLineSync.question('Enter the first number:'));
// const n2 = Number(readLineSync.question('Enter the second number:'));
// console.log(`${n1} + ${n2} = ${n1 + n2}`);
// console.log(`${n1} - ${n2} = ${n1 - n2}`);
// console.log(`${n1} * ${n2} = ${n1 * n2}`);
// console.log(`${n1} / ${n2} = ${n1 / n2}`);
// console.log(`${n1} % ${n2} = ${n1 % n2}`);
// console.log(`${n1} ** ${n2} = ${n1 ** n2}`);


console.log(`\n The End Is Near But Not Here`);
// Split into words
// Access the element at index -2
function penultimate(s) {
  const words = s.split(' ');
  return words[words.length-2];
}
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true


console.log(`\n Exclusive Or`);
// Do an 'or' of two 'and's (of one being true and not the other)
// Cast to a boolean
function xor(b1, b2) {
  return !!((b1 && !b2) || (!b1 && b2))
}
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);


console.log(`\n ============= Odd Lists ============= `);
function oddities(arr) {
  return arr.filter((val, ind) => ind % 2 === 0)
}
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []


console.log(`\n ============= Convert a String to a Number! ============= `);
const CHARS_TO_INTS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};
function stringToInteger(str) {
  return str.split('').reduce((pv, cv) => pv * 10 + CHARS_TO_INTS[cv], 0);
}
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


console.log(`\n ============= Convert a String to a Signed Number! ============= `);
function stringToSignedInteger(str) {
  if (str.startsWith('-')) {
    return -stringToInteger(str.slice(1));
  } else if (str.startsWith('+')) {
    return stringToInteger(str.slice(1));
  } else {
    return stringToInteger(str);
  }
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true


console.log(`\n ============= Convert a Number to a String! ============= `);
const DIGITS_TO_STRS = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
};
// Keep getting the remainder when dividing by 10 and pushing into an array
// In between, divide by 10 and take the floor
// Then reverse, convert to strings, and join.
function integerToString(int) {
  let chars = [];
  do {
    chars.push(DIGITS_TO_STRS[int % 10]);
    int = Math.floor(int / 10);
  } while (int);
  return chars.reverse().join('');
}
console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"


console.log(`\n ============= Convert a Signed Number to a String! ============= `);
function signedIntegerToString(int) {
  if (int > 0) {
    return '+' + integerToString(int);
  } else if (int < 0) {
    return '-' + integerToString(-int);
  } else {
    return '0';
  }
}
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");