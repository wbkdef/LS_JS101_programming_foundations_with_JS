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