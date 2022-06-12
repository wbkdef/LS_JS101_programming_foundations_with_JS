

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