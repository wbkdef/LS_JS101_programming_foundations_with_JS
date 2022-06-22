// @ts-check

console.log(`\n 1. Detecting IP Addresses"`);

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}
console.log(`console: ${console}`);


console.log(isDotSeparatedIpAddress("1.0.32.24"));
console.log(isDotSeparatedIpAddress("1.0.32.2400"));
console.log(isDotSeparatedIpAddress("1.0.30"));
console.log(isDotSeparatedIpAddress("1.0.30.59.128"));
