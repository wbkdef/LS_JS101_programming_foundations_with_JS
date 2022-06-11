const readLineSync = require('readline-sync');


console.log(`\n How Old is Teddy?`);
console.log(`Teddy is ${20 + Math.round(Math.random() * 100)} years old!`);


// console.log(`\n Searching 101`);
// const nums = [];
// nums.push(Number(readLineSync.question(`Enter the 1st number:`)))
// nums.push(Number(readLineSync.question(`Enter the 2nd number:`)))
// nums.push(Number(readLineSync.question(`Enter the 3rd number:`)))
// nums.push(Number(readLineSync.question(`Enter the 4th number:`)))
// nums.push(Number(readLineSync.question(`Enter the 5th number:`)))
// const toSearchFor = Number(readLineSync.question(`Enter the last number:`));

// if (nums.includes(toSearchFor)) {
//   console.log(`The number ${toSearchFor} appears in ${nums}.`);
// } else {
//   console.log(`The number ${toSearchFor} does not appear in ${nums}.`);
// }


console.log(`\n When Will I Retire?`);
const age = Number(readLineSync.question(`What is your age?`));
const retAge = Number(readLineSync.question(`At what age would you like to retire?`));
const year = new Date().getFullYear();
console.log(`It's ${year}. You will retire in ${year + retAge - age}.`);
console.log(`You have only ${retAge - age} years of work to go!`);

