

console.log(`\n Sum Of Digits`);
// Option 1
// Do a .forEach over a string of the number and add the digits
// Option 2
// Do recursively, summing the remainder with a recursive call
//      to the number divided by 10 rounded down.
function sum(num) {
  if (num === 0) {
    return 0;
  } else {
    return (num % 10) + sum(Math.floor(num / 10));
  }
}
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

// Do with reduce, after converting to a string
function sum2(num) {
  return String(num)
    .split('')
    .reduce((tot, digit) => tot + Number(digit),
      0);
}
console.log(sum2(23));           // 5
console.log(sum2(496));          // 19
console.log(sum2(123456789));    // 45


console.log(`\n Alphabetical Numbers`);
// Option 1
// Use a compare function that compares the text representations
// Option 2
// Use objects to convert from numbers to their string representation,
//    sort those, then convert back
// I prefer option 2

const numbers =
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const numberStrings = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
const numbersToStrings = {};
const stringsToNumbers = {};
for (let i = 0; i < 20; i++) {
  numbersToStrings[numbers[i]] = numberStrings[i];
  stringsToNumbers[numberStrings[i]] = numbers[i];
}

function alphabeticNumberSort(nums) {
  return nums
    .map(num => numbersToStrings[num])
    .sort()
    .map(str  =>  stringsToNumbers[str]);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


function compNum(num1, num2) {
  if (numberStrings[num1] < numberStrings[num2]) {
    return -1;
  } else if (numberStrings[num1] > numberStrings[num2]) {
    return 1;
  } else {
    return 0;
  }
}


/**
 * Try 2, using comparison operator
 * @param {Array[Number]} nums numbers to sort
 * @returns Numbers sorted by how their text representation would sort
 */
function alphabeticNumberSort2(nums) {
  const numsCopy = [...nums];
  numsCopy.sort(compNum);
  return numsCopy;
}

console.log(alphabeticNumberSort2(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
// console.log(numbersToStrings);
// console.log(stringsToNumbers);



console.log(`\n Multiply All Pairs - https://launchschool.com/exercises/2c36b66c`);

function numComp(n1, n2) {
  if (n1 < n2) {
    return -1;
  } else if (n1 > n2) {
    return 1;
  } else {
    return 0;
  }
}

function multiplyAllPairs(arr1, arr2) {
  const products = [];
  arr1.forEach(num => {
    arr2.forEach(num2 => {
      products.push(num * num2);
    });
  });
  // return products.sort(numComp);
  return products.sort((a, b)  =>  a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]


console.log(`\n Leading Substrings - https://launchschool.com/exercises/50f14ae3`);
// Iterate up to the length of the string
// Slice from 0 up to this value and push into array
function leadingSubstrings(str) {
  const subStrs = [];
  for (let ind = 1; ind <= str.length; ind++) {
    subStrs.push(str.slice(0, ind));
  }
  return subStrs;
}
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


console.log(`\n ----------------- All Substrings -----------------`);
// https://launchschool.com/exercises/381f7129
// Recursive
// Get all leadingSubstrings
// Recursively call without the first character
// Concatenate the results
// Implicit requirements:
//    don't return empty string.
//    It looks like can include the same substring several times
function substrings(str) {
  if (str.length === 0) {
    return [];
  }
  return leadingSubstrings(str).concat(substrings(str.slice(1)));
}

console.log(substrings('abcde'));

// returns
// ["a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e"]


console.log(`\n ----------------- Palindromic Substrings -----------------`);
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
function palindromes(str) {
  return substrings(str)
    .filter(subStr => subStr.length > 1 && isPalindrome(subStr));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


console.log(`\n ----------------- Sum of Sums -----------------`);
function sumOfSums(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.reduce((pv, cv) => pv + cv, 0)
    + sumOfSums(arr.slice(0, -1));
}
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


console.log(`\n ----------------- Grocery List -----------------`);
function buyFruit(shoppingList) {
  let ret = [];
  for (const [item, quantity] of shoppingList) {
    ret.push(...Array(quantity).fill(item));
  }
  return ret;
}
// function buyFruit(shoppingList) {
//   return [].concat(...shoppingList.map(itemQuantity => Array(itemQuantity[1]).fill(itemQuantity[0])));
// }
// function buyFruit(shoppingList) {
//   return shoppingList
//     .map(itemQuantity => Array(itemQuantity[1]).fill(itemQuantity[0]))
//     .flat();
// }
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


console.log(`\n ----------------- Inventory Item Transactions -----------------`);
function transactionsFor(id, transactions) {
  return transactions.filter(trans => trans.id === id);
}
let transactions = [
  { id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];
const util = require('util');
console.log(
  util.inspect(transactionsFor(101, transactions),
    { showHidden: false, depth: null, colors: true }));

// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]


console.log(`\n ----------------- Inventory Item Availability -----------------`);
function isItemAvailable(id, transactions) {
  const nAvailable = transactionsFor(id, transactions)
    .map(trans => (trans.movement === 'in' ? 1 : -1) * trans.quantity)
    .reduce((pv, cv) => pv + cv, 0);
  return nAvailable > 0;
}
transactions = [{ id: 101, movement: 'in', quantity: 5 },
{ id: 105, movement: 'in', quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in', quantity: 12 },
{ id: 103, movement: 'out', quantity: 20 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in', quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in', quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 },];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true