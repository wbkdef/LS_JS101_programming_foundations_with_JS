

let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replace(/important/g, 'urgent'));


// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let numbers = [1, 2, 3, 4, 5];

console.log([...numbers].reverse()); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); // [ 5, 4, 3, 2, 1 ]


console.log(numbers.slice().sort((num1, num2) => num2 - num1)); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); // [ 5, 4, 3, 2, 1 ]


console.log(`\n 5. Splicing`);
const nums = [1, 2, 3, 4, 5];
console.log(nums.splice(2, 1));
console.log(nums);


// console.log(`\n 5. Flattening`);
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// let flattened = [];
// for (const el of flintstones) {
//   if (Array.isArray(el)) {
//     flattened.push(...el);
//   } else {
//     flattened.push(el)
//   }
// }
// console.log(flattened);


// console.log(`\n 5. Flattening`);
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// console.log(flintstones.flat());
// console.log([].concat(...flintstones));


console.log(`\n 6. Filter`);
let flintstones =
  { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(Object.entries(flintstones));
console.log( Object.entries(flintstones).filter(entry => entry[0] === 'Barney'));
console.log(Object.entries(flintstones).filter(entry => entry[0] === 'Barney')[0]);


let title = "Flintstone Family Members";
console.log(' '.repeat(Math.floor(20 - title.length / 2)) + title);


console.log(`\n 10. lower-case t characters`);
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log((statement1.match(/t/g) || []).length);
console.log((statement2.match(/t/g) || []).length);
