console.log(`\n 1. Empty Array`);

let numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.shift();
}
console.log(numbers);

numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);


console.log([1, 2, 3] + [4, 5]);