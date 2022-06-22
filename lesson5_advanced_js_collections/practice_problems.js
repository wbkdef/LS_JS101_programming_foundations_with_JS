console.log(`\n =========== 1 =========== `);
let arr = ['10', '11', '9', '7', '8'];
console.log(arr.sort((el1, el2) => +el2 - +el1));


console.log(`\n =========== 2 =========== `);
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];
books.sort((el1, el2) => Number(el1.published) - Number(el2.published));
console.log(books.map(book => book.published));

books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});


console.log(`\n =========== 3 =========== `);
{
  let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
  console.log(arr1[2][1][3]);

  let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] },
  { third: ['g', 'h', 'i'] }];
  console.log(arr2[1].third[0]);

  let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
  console.log(arr3[2].third[0][0]);

  let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
  console.log(obj1.b[1]);

  let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } }
  console.log(Object.keys(obj2.third)[0]);
}

console.log(`\n =========== 4 =========== `);
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
console.log(arr2);

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0];
console.log(obj1);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4
console.log(obj2);


console.log(`\n =========== 5 =========== `);
{
  let munsters = {
    Herman: { age: 32, gender: 'male' },
    Lily: { age: 30, gender: 'female' },
    Grandpa: { age: 402, gender: 'male' },
    Eddie: { age: 10, gender: 'male' },
    Marilyn: { age: 23, gender: 'female' }
  };
  let totalMaleAge = 0;
  for (const info of Object.values(munsters)) {
    if (info.gender === 'male') {
      totalMaleAge += info.age;
    }
  }
  console.log(totalMaleAge);
}


console.log(`\n =========== 6 =========== `);
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female' }
};
for (const [name, info] of Object.entries(munsters)) {
  console.log(`${name} is a ${info.age}-year-old ${info.gender}.`);
}


console.log(`\n =========== 8 =========== `);
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
Object.values(obj).forEach(arr => {
  console.log("--");
  arr.forEach(str => {
    console.log(str.replace(/[^aeiou]/g, ''));
  })
})


console.log(`\n =========== 9 =========== `);
{
  let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
  const newArr = arr.map(sa => {
    if (isNaN(sa[0])) {
      return sa.slice().sort();
    } else {
      return sa.slice().sort((a, b) => a - b);
    }
  })

  const util = require('util');

  console.log(util.inspect(arr, { showHidden: false, depth: null, colors: true }));
  console.log(util.inspect(newArr, { showHidden: false, depth: null, colors: true }));
}


console.log(`\n =========== 10 =========== `);
{
  let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
  const newArr = arr.map(sa => {
    if (typeof sa[0] === 'string') {
      return sa.slice().sort().reverse();
    } else {
      return sa.slice().sort((a, b) => b - a);
    }
  })

  const util = require('util');
  console.log(util.inspect(arr, { showHidden: false, depth: null, colors: true }));
  console.log(util.inspect(newArr, { showHidden: false, depth: null, colors: true }));
}


console.log(`\n =========== 11 =========== `);
{
  let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
  const arrNew = arr.map(obj => {
    return Object.fromEntries(
      Object.entries(obj).map(kv => [kv[0], kv[1] + 1]));
  });
  const util = require('util');
  console.log(util.inspect(arr, { showHidden: false, depth: null, colors: true }));
  console.log(util.inspect(arrNew, { showHidden: false, depth: null, colors: true }));
}


console.log(`\n =========== 12 =========== `);
{
  let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
  let arrNew = arr.map(subArr => subArr.filter(num => num % 3 === 0))
  const util = require('util');
  console.log(util.inspect(arr, { showHidden: false, depth: null, colors: true }));
  console.log(util.inspect(arrNew, { showHidden: false, depth: null, colors: true }));
}


console.log(`\n =========== 13 =========== `);
{
  let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
  function sumOdds(array) {
    return array.filter(n => n % 2 === 1).reduce((pv, cv) => pv + cv, 0);
  }
  let arrNew = arr.slice().sort((a, b) => sumOdds(a) - sumOdds(b));
  const util = require('util');
  console.log(util.inspect(arr, { showHidden: false, depth: null, colors: true }));
  console.log(util.inspect(arrNew, { showHidden: false, depth: null, colors: true }));
}


console.log(`\n =========== 14 =========== `);
{
  let obj = {
    grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
    carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
    apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
    apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
    marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
  };
  // get the values and do a map
  // inside the map have if statments do the transformations needed (with more maps)
  const objNew = Object.values(obj).map(info => {
    if (info.type === 'fruit') {
      return info.colors.map(col => col[0].toUpperCase() + col.slice(1));
    } else {
      return info.size.toUpperCase();
    }
  })

  const util = require('util');
  console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }));
  console.log(util.inspect(objNew, { showHidden: false, depth: null, colors: true }));
  // [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
}


console.log(`\n =========== 15 =========== `);
{
  let arr = [
    { a: [1, 2, 3] },
    { b: [2, 4, 6], c: [3, 6], d: [4] },
    { e: [8], f: [6, 10] },
  ];
  // filter
  // Do an every on the values of the object, with a nested every testing for evenness
  const arrNew = arr.filter(obj => {
    return Object.values(obj).every(subArr => subArr.every(num => num % 2 === 0));
  });

  const util = require('util');
  console.log(util.inspect(arr, { showHidden: false, depth: null, colors: true }));
  console.log(util.inspect(arrNew, { showHidden: false, depth: null, colors: true }));
  // [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
}


console.log(`\n =========== 16 =========== `);
{
  let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];
  let obj = Object.fromEntries(arr);
// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

  const util = require('util');
  console.log(util.inspect(arr, { showHidden: false, depth: null, colors: true }));
  console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }));
  // [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
}


console.log(`\n =========== 16 =========== `);
{
 // __PEDAC__, as per:
 // __P__:
 //   input: None
 //   output: A UUID string (randomly generated)
 //   signature: generateUUID() => 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'
 //   Rules:
 //     Explicit:
 //       - 8-4-4-4-12 pattern
 //       - Use a-z (lowercase) and (0-9)
 //     Implicit:
 //       - Each number and lower case letter should be equally likely
 // __E__:
 //   Does it match the regex /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/
 //   Run it twice and get different outputs
 // __D/A__ - Pseudocode for the data structures and algorithms to use:

  function getUUID_String(len) {
    let arr = [];
    const chars = '0123456789abcdef'
    for (let ind = 0; ind < len; ind++) {
      arr.push(chars[Math.floor(Math.random() * chars.length)]);      
    }
    return arr.join('')
  }
  
  function generateUUID() {
    return getUUID_String(8)
      + '-' + getUUID_String(4)
      + '-' + getUUID_String(4)
      + '-' + getUUID_String(4)
      + '-' + getUUID_String(12)
  }

  console.log(generateUUID());
  console.log(generateUUID());
  const UUID_Regex = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  console.log(UUID_Regex.test(generateUUID()));
  console.log(generateUUID() !== generateUUID());
}