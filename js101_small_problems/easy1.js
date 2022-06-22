

console.log(`\n Isn't it Odd?`);
function isOdd(n) {
  // console.log(`${n} % 2 === ${n % 2}`);
  return Math.abs(n) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true


console.log(`\n Odd Numbers`);
for (let i = 1; i < 100; i += 2) {
  console.log(i);  
}


// console.log(`\n How big is the room? Enter width and length`);
// const readLineSync = require('readline-sync');
// const width = readLineSync.prompt("Enter width of room (meters): ")
// const length = readLineSync.prompt("Enter length of room (meters): ")
// const area = width * length;
// const M_TO_FT_SQUARED = 10.7639
// console.log(`The area of the room is ${area.toFixed(2)} meters^2 = ${(area * M_TO_FT_SQUARED).toFixed(2)} ft^2`); 


// console.log(`\n Tip Calculator`);
// const readLineSync = require('readline-sync');
// const bill_amt = parseFloat(readLineSync.question('What is the bill?'));
// const tip_percent = parseFloat(readLineSync.question('What is the tip percentage?'));
// const tip_amt = bill_amt * tip_percent / 100;

// console.log(`The tip is $${tip_amt.toFixed(2)}`);
// console.log(`The total is $${(bill_amt + tip_amt).toFixed(2)}`);


// console.log(`\n Sum or Product of Consecutive Integers`);
// const readLineSync = require('readline-sync');
// let int = readLineSync.question('Please enter an integer greater than 0: ')
// let choice = readLineSync.question('Enter "s" to compute the sum, or "p" to compute the product.: ')
// ints = [];
// for (let ind = 1; ind <= int; ind++) {
//   ints.push(ind);
// }
// let res;
// if (choice === "s") {
//   res = ints.reduce((pv, cv) => pv + cv, 0);
//   console.log(`The sum of the integers between 1 and ${int} is ${res}.`);
// } else if (choice === "p") {
//   res = ints.reduce((pv, cv) => pv * cv, 1);
//   console.log(ints);
//   console.log(`The product of the integers between 1 and ${int} is ${res}.`);
// } else {
//   console.log(`UNEXPECTED CHOICE: ${choice}`);
// }


console.log(`\n Short Long Short`);
function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1];
  }
  // strs = [str1, str2].sort((a, b) => a.length - b.length);
  return str1 + str2 + str1;
}
console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"


console.log(`\n Leap Years (Part 1)`);
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

console.log(isLeapYear(2016) === true);
console.log(isLeapYear(2015) === false);
console.log(isLeapYear(2100) === false);
console.log(isLeapYear(2400) === true);
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000) === true);
console.log(isLeapYear(1900) === false);
console.log(isLeapYear(1752) === true);
console.log(isLeapYear(1700) === false);
console.log(isLeapYear(1) === false);
console.log(isLeapYear(100) === false);
console.log(isLeapYear(400) === true);



console.log(`\n Leap Years (Part 2)`);
function isLeapYearBritishEmpire(year) {
  if (year > 1752) {
    return isLeapYear(year);
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYearBritishEmpire(2016) === true);
console.log(isLeapYearBritishEmpire(2015) === false);
console.log(isLeapYearBritishEmpire(2100) === false);
console.log(isLeapYearBritishEmpire(2400) === true);
console.log(isLeapYearBritishEmpire(240000) === true);
console.log(isLeapYearBritishEmpire(240001) === false);
console.log(isLeapYearBritishEmpire(2000) === true);
console.log(isLeapYearBritishEmpire(1900) === false);
console.log(isLeapYearBritishEmpire(1752) === true);
console.log(isLeapYearBritishEmpire(1700) === true);
console.log(isLeapYearBritishEmpire(1) === false);
console.log(isLeapYearBritishEmpire(100) === true);
console.log(isLeapYearBritishEmpire(400) === true);


console.log(`\n Multiples of 3 and 5`);
function multisum(int) {
  let sum = 0;
  for (let ind = 1; ind <= int; ind++) {
    if (ind % 3 === 0 || ind % 5 === 0) {
      sum += ind;
    }
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168


console.log(`\n UTF-16 String Value`);
function utf16Value(str) {
  return str.split('').reduce((pv, cv) => pv + cv.charCodeAt(), 0);
}
console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811