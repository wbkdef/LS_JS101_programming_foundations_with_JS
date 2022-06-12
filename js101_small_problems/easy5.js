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
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73