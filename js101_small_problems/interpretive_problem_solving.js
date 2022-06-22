console.log(`\n 1000 Lights - https://launchschool.com/exercises/4dfb6228`);

// You have a bank of switches before you, numbered from 1 to count.
// Every switch is connected to exactly one light that is initially off.
// You walk down the row of switches and toggle every one of them,
//   that is, you flip every switch.All the lights are now on.You walk back
// to the beginning of the row and start another pass.On this second pass,
//   you toggle switches 2, 4, 6, and so on.Now, every other light is on.
//   On the third pass, you go back to the beginning again, this time toggling
//   switches 3, 6, 9, and so on.You continue to repeat this process
//   until you have made count passes.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after count passes.

// __PEDAC__, as per:
// * https://launchschool.com/lessons/60e10aa5/assignments/73c01de6
// * https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f
// __P__:
//   input: An integer (the # of lights)
//   output: An array showing which lights are on
//   signature: lightsOn(nLights) => lights that are on
//   Rules:
//     Explicit:
//       - Lights start off
//       - First flip every switch
//       - Then every 2nd (starting with the 2nd)
//       - Then every 3rd (starting with the 3rd)
//       - Continue up to nLights
//       - Return numbers of switches that are on at the end
//     Implicit:
//       - First switch is switch 1, not 0
//       -
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   Create an array 'switches' of "false" (false will indicate off, true on)
//   Create an outer for loop, which increments nJumpBy from 1 to nLights
//   Create an inner for loop, which increments 'ind' by nJumpBy
//      starting from nJumpBy - 1 to the end of the array.  Toggle the
//      corresponding switches in the array.
//   After all the for loops are done, we want the indices of the locations
//      containing true.  Do this with a for loop or a map then filter.

function lightsOn(nLights) {
  let lights = Array(nLights).fill(false);
  for (let nJumpBy = 1; nJumpBy <= nLights; nJumpBy++) {
    for (let ind = nJumpBy - 1; ind < nLights; ind += nJumpBy) {
      lights[ind] = !lights[ind];
    }
    // console.log(`nJumpBy: ${nJumpBy}`);
    // console.log(`lights: ${lights}`);
  }
  return lights.map((val, ind) => (val ? ind + 1 : val)).filter(val => val);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


console.log(`\n Diamonds - https://launchschool.com/exercises/02297071`);
// Write a function that displays a four - pointed diamond in an nxn grid,
// where n is an odd integer supplied as an argument to the function.
// You may assume that the argument will always be an odd integer.
// __PEDAC__, as per:
// __P__:
//   input: Odd integer 'size'
//   output: Print out a diamond shape in stars, with width and height 'size'
//   signature: diamond(size) => printed diamond
//   Rules:
//     Explicit:
//       - Odd integers supplied
//       - 
//     Implicit:
//       - Add spaces in front
//       - Use '*' char to create body of diamond
// __E__:
//   *Given*
// __D/A__ - Pseudocode for the data structures and algorithms to use:
//   PSEUDO_CODE_HERE
//   PSEUDO_CODE_HERE

function diamond(size) {
  // Top half of triangle
  for (let width = 1; width <= size; width += 2) {
    let padding = Math.floor(size / 2) - Math.floor(width / 2);
    console.log(' '.repeat(padding) + '*'.repeat(width));
  }
  // Bottom half of triangle
  for (let width = size - 2; width >= 1; width -= 2) {
    let padding = Math.floor(size / 2) - Math.floor(width / 2);
    console.log(' '.repeat(padding) + '*'.repeat(width));
  }
}


diamond(1);
// logs
// *
diamond(3);
// logs
//  *
// ***
//  *
diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
