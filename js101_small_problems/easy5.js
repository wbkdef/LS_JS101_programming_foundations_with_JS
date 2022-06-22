const readLineSync = require('readline-sync');


console.log(`\n Cute Angles`);
// Get degrees with Math.floor
// Get minutes from the remainder times 60 rounded down
// Get seconds from the remainder of previous times 60 rounded down
function dms(angle) {
  const degrees = Math.floor(angle);
  let remainder = angle - degrees;
  const minutes = Math.floor(remainder*60);
  remainder = remainder*60 - minutes;
  const seconds = Math.floor(remainder*60);
  return `${degrees}°${minutes}'${seconds}`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"


console.log(`\n Combining Arrays`);
// Turn them into a combined set
// Change that set into an array
function union(arr1, arr2) {
  const s = new Set();
  arr1.forEach(el  =>  { s.add(el); })
  arr2.forEach(el  =>  { s.add(el); })
  let array = [...s];
  return array
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


console.log(`\n Halvsies`);
function halvsies(arr) {
  const mid = Math.floor(arr.length/2 + .5);
  return [arr.slice(0, mid), arr.slice(mid)];
}
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]


console.log(`\n Find the Duplicate`);
// Add elements from the array to a set
  // Each time check if the elt is already in the set
  // If it is, return that elements
/**
 * Documentation
 * @param {Array} arr Array of numbers with a single duplicate
 * @returns {Number} - The duplicate number from the array
 */
  function findDup(arr) {
  const s = new Set();
  for (const el of arr) {
    if (s.has(el)) {
      return el;
    }
    s.add(el);
  }
}
console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
  7, 34, 57, 74, 45, 11, 88, 67, 5, 58]));    // 73


console.log(`\n ================= Combine Two Lists =================`);
function interleave(arr1, arr2) {
  let res = [];
  for (let ind = 0; ind < arr1.length; ind++) {
    res.push(arr1[ind], arr2[ind]);
    // res.push(arr1[ind]);
    // res.push(arr2[ind]);
  }
  return res;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


console.log(`\n ================= Multiplicative Average =================`);
function multiplicativeAverage(nums) {
  return nums.reduce((pv, cv) => pv * cv, 1) / nums.length;
}
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"


console.log(`\n ================= Multiply Lists =================`);
function multiplyList(arr1, arr2) {
  let products = [];
  for (let ind = 0; ind < arr1.length; ind++) {
    products.push(arr1[ind] * arr2[ind]);
  }
  return products;
}
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]


console.log(`\n ================= List of Digits =================`);
// Convert to string, split, convert back to ints
function digitList(int) {
  return int.toString().split('').map(char => Number(char));
}
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]


console.log(`\n ================= How Many? =================`);
function countOccurrences(arr) {
  let count = {};
  for (const str of arr) {
    count[str] = (count[str] || 0) + 1;
  }
  for (const [str, num] of Object.entries(count)) {
    console.log(`${str} => ${num}`);
  }
}
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];
countOccurrences(vehicles);
// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2


console.log(`\n ================= Array Average =================`);
function average(ints) {
  const sum = ints.reduce((pv, cv) => pv + cv, 0);
  return Math.floor(sum / ints.length);
}
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40


console.log(`\n ================= After Midnight (Part 1) =================`);
function zeroPad(str) {
  str = "00" + str;
  return str.slice(str.length - 2);
}

function timeOfDay(mins) {
  while (mins > 0) {
    mins -= 60 * 24;
  }
  while (mins < 0) {
    mins += 60 * 24;
  }
  return `${zeroPad(Math.floor(mins / 60))}:${zeroPad(mins % 60)}`;
}
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));


console.log(`\n ================= After Midnight (Part 2) =================`);
const MINS_PER_DAY = 60 * 24;

function afterMidnight(time) {
  const [hrs, mins] = time.split(":").map(num => Number(num));
  let totalMins = (hrs * 60) + mins;
  return totalMins % MINS_PER_DAY;
}

function beforeMidnight(time) {
  let totalMins = (MINS_PER_DAY) - afterMidnight(time);
  return totalMins % MINS_PER_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
