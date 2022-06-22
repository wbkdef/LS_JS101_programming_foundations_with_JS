
console.log(`\n 1. ASCII Art"`);
for (let nSpaces = 0; nSpaces < 10; nSpaces++) {
  console.log(' '.repeat(nSpaces) + 'The Flintstones Rock!');
}


console.log(`\n 1. Swap case"`);
let munstersDescription = "The Munsters are creepy and spooky.";
const caseReversed = munstersDescription
  .split('')
  .map(char => /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase())
  .join('');
console.log(caseReversed);


