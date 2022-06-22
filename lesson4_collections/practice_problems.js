
console.log(`\n Problems from https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2`);


console.log(`\n Practice Problem 8`);
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesToInds = {};
// for (let ind = 0; ind < flintstones.length; ind++) {
//   flintstonesToInds[flintstones[ind]] = ind;
// }
flintstones.forEach((name, ind) => {
  flintstonesToInds[name] = ind;
});
console.log(flintstonesToInds);
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

{
  console.log(`\n Practice Problem 9`);
  let ages = {
    Herman: 32,
    Lily: 30,
    Grandpa: 5843,
    Eddie: 10,
    Marilyn: 22,
    Spot: 237
  };
  let res = Object.values(ages).reduce((pv, cv) => pv + cv, 0);
  console.log(res);
}

{
  console.log(`\n Practice Problem 10`);
  let ages = {
    Herman: 32,
    Lily: 30,
    Grandpa: 5843,
    Eddie: 10,
    Marilyn: 22,
    Spot: 237
  };
  let res = Object.values(ages).reduce((pv, cv) => Math.min(pv, cv), Infinity);
  console.log(res);
  console.log(Math.min(...Object.values(ages)));
}

{
  console.log(`\n Practice Problem 11`);
  let statement = "The Flintstones Rock";
  // Iterate through the characters.
  // If they aren't a key yet, add the key with count 1
  // If they are the key, increment the key
  // let counts = {};
  // for (let ind = 0; ind < statement.length; ind++) {
  //   const char = statement[ind];
  //   if (!Object.keys(counts).includes(char)) {
  //     counts[char] = 0;
  //   }
  //   counts[char] += 1;
  // }
  let counts = {};
  for (const char of statement.split('').filter(char => char !== ' ')) {
    counts[char] = (counts[char] || 0) + 1;
  }

  console.log(statement);
  // { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
}
