console.log(`\n ddaaiillyy ddoouubbllee`);
// Iterate through the string
// Keep track of the last character
// If the current character is different from the last character, 
  // update the last character to it and 
  // add this character to an output array.
// At the end, join all characters in the output array into a string and return

function crunch(s) {
  let last_char = null;
  const out_chars = [];
  for (const c of s) {
    if (c != last_char) {
      out_chars.push(c);
      last_char = c;
    }
  }
  return out_chars.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


console.log(`\n Bannerizer`);
logInBox('To boldly go where no one has gone before.');
logInBox('');

function logInBox(s) {
  len = s.length;
  console.log('+' + '-'.repeat(len + 2) + '+');
  console.log('|' + ' '.repeat(len + 2) + '|');
  console.log('| ' + s + ' |');
  console.log('|' + ' '.repeat(len + 2) + '|');
  console.log('+' + '-'.repeat(len + 2) + '+');
}


console.log(`\n Stringy Strings`);
// repeat "10" n times, then slice out the first n characters
function stringy(n) {
  return "10".repeat(n).slice(0, n);
}
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"


console.log(`\n Fibonacci Number Location By Length`);
function findFibonacciIndexByLength(n_digits) {
  let ind = 1n;  // Current fibonacci number
  let fp = 0n;  // Previous fibonacci number
  let f = 1n;  // Current fibonacci number
  while (String(f).length < n_digits) {
    ind += 1n;
    [fp, f] = [f, f + fp];
    // console.log([fp, f]);
  }
  return ind
}
// console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
// findFibonacciIndexByLength(10000n) === 47847n;
// The last example may take a minute or so to run.