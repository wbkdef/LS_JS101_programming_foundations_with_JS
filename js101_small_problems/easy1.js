

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


console.log(`\n Tip Calculator`);
const readLineSync = require('readline-sync');
const bill_amt = parseFloat(readLineSync.question('What is the bill?'));
const tip_percent = parseFloat(readLineSync.question('What is the tip percentage?'));
const tip_amt = bill_amt * tip_percent / 100;

console.log(`The tip is $${tip_amt.toFixed(2)}`);
console.log(`The total is $${(bill_amt + tip_amt).toFixed(2)}`);

