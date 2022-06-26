
// Scope
console.log('\n ----------------- scope ----------------- ');
let imGlobal = 5;

function fcn(par1) {
  let val = par1 * 2;
  console.log(imGlobal);  // 5, b/c can access this variable from the global scope
  console.log(par1, val);  // Works b/c these values are defined in this function scope
  return val;
}

while (true) {
  let b = 2;
  console.log(b);
  break;
}

fcn(3);

console.log(imGlobal);  // 5
// console.log(par1, val);  // Throws an error, b/c these are only defined with the function's scope
// console.log(b);  // Would throw an error if execution reached here


console.log('\n ----------------- object properties ----------------- ');
let obj = {
  a: 1,
  b: 2,
  "c d": 5
};
console.log(obj.a);  // 1
console.log(obj['b']);  // 2
console.log(obj['c d']);  // 5
obj.a += 2;
console.log(obj.a);  // 3


console.log('\n ----------------- mutability vs. immutability vs. const ----------------- ');
let arr = [3, 5];
arr[1] = 6;
console.log(arr);  // [3, 6] - change b/c Arrays are generally mutable
let str = 'hello';
str[0] = 'H';
console.log(str);  // 'hello' - unchange b/c strings are immutable


console.log('\n ----------------- loose and strict equality ----------------- ');
console.log(true == '1');  // true b/c both converted to the Number 1
console.log(true === '1');  // false b/c different types


console.log('\n ----------------- understand the concepts of pass-by-reference and pass-by-value ----------------- ');
function rv(val, ref) {
  val = 2;
  ref[1] = 3;
}

let vp = 5;
let vr = [1, 2];
rv(vp, vr);
console.log(vp);  // 5
console.log(vr);  // [1, 3]


console.log('\n ----------------- function declarations, function expressions, and arrow functions ----------------- ');
function fd() { }
const fe = function () { };
const fa = val => val * 2;


console.log('\n ----------------- implicit return value of function invocations ----------------- ');

function f1() { return 1 }
function f2() { return }
function f3() { }
console.log(f1());  // 1
console.log(f2());  // undefined
console.log(f3());  // undefined


console.log('\n ----------------- first-class functions ----------------- ');
function double(par) {
  return par + par;
}
console.log([3, "Hi"].map(double));  // [6, 'HiHi']


console.log([1, 2, 3].map(num => num * 2));