

console.log(`\n Filtering for fruits - https://www.google.com/search?q=filter+object+javascript&oq=filter+object+javascript&aqs=chrome..69i57j0i512l2j0i22i30l7.6065j0j1&sourceid=chrome&ie=UTF-8`);
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
/**
 * @param {Object} prod produce
 */
function selectFruit(prod) {
  const fruitEntries =
    Object.entries(prod).filter(keyVal => keyVal[1] === 'Fruit');
  console.log(fruitEntries);
  return Object.fromEntries(fruitEntries)
}
console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
// filter somehow?  See what JS has for objects