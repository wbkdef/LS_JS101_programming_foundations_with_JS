# Study Guide Explanations

The study guide says to clearly explain the following topics:

## declarations, initialization, assignment, and re-assignment
A declaration is where a variable or function is declared.  A variable may or may not be assigned a value on that same line that it is declared.  For instance these 3 lines are declarations of `myFunc`, `val1`, and `val2`:

```javascript
function myFunc() {}
let val1;
let val2 = "hello";
```

An initialization is when a variable is first assigned a value.  For example, `val2` is also initialized to `"hello"` on line 3.  The function `myFunc` is also initialized on line 1 where it is declared.

An assignment is when a variable is assigned to a value.  i.e.:

```javascript
val1 = 'world';
val2 = 'Hello';
```

Line 2 here is also a "re-assignment", because `val2` was previously assigned (initialized) to `"hello"`.

## variable scope, especially how variables interact with function definitions and blocks
Variables all have a scope in which they are defined.  This is the smallest enclosing scope.
For instance, consider the following code:

```javascript
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
console.log(par1, val);  // Throws an error, b/c these are only defined with the function's scope
console.log(b);  // Would throw an error if execution reached here
```

Variable `imGlobal` has global scope (the entire file it's defined in).
Same for `fcn`.  

The function body defines a smaller scope to which `par1` and `val` are
limited.  Trying to access these variable outside the function body (2nd last line) would throw an error.  `imGlobal` from the enclosing global scope can also be accessed within the function body.

The while loop also defines a smaller scope to which `b` is limited.

## primitive values, objects, and type coercions
Primitive values are 'immutable' values built into the language.  Immutable means you can't change their values, though you can create altered versions (copies) of them without changing the original.  They include Booleans, Numbers, Strings, Null, Undefined, BigInts, and Symbols.

Objects are defined by key-value pairs.  Everything that isn't a primitive is an object (including Arrays, Functions).  Objects can generally be mutated, meaning the values within an object can be modified, "affecting" all variables referencing to this object.

Type coercions can be implicit or explicit.  For example `Number('3.14')` explicitly converts a string to a number.  `'3.14' + 15` would implicitly conver the number `15` to a string so that it can be concatenated with the other string.

## object properties
Objects are key-value mappings from properties to values.  The value associated with a property
`PROPERTY_NAME` can be accessed (or assigned to) with the `obj.PROPERTY_NAME` or `obj['PROPERTY_NAME']` syntaxes.
Note that all keys (property names) are strings.

```javascript
let obj = {
  a: 1,
  b: 2,
  "c d": 5
}
console.log(obj.a);  // 1
console.log(obj['b']);  // 2
console.log(obj['c d']);  // 5
obj.a += 2
console.log(obj.a);  // 3
```
## mutability vs. immutability vs. const
Each variable is assigned to a value (a primitive or an object).  [im]mutability is about
whether that value can be changed.  For example:

```javascript
let arr = [3, 5];
arr[1] = 6;
console.log(arr);  // [3, 6] - change b/c Arrays are generally mutable
let str = 'hello';
str[0] = 'H';
console.log(str);  // 'hello' - unchange b/c strings are immutable
```

Declaring a variable with the `const` keyword doesn't allow the variable to be reassigned to a different value.  So this is about whether a variable can be reassigned to a new value, not whether a value can be changed.

## loose and strict equality
The `==` operator applies some type conversions before values are compared (so that values of different types can be compared meaningfully).  `===` simply returns `false` when comparing values of different types.  For example:

```javascript
console.log(true == '1');  // true b/c both converted to the Number 1
console.log(true === '1');  // false b/c different types
```

## passing arguments into and return values out of functions
## working with Strings
## working with Arrays, especially the iteration methods (forEach, map, filter, find, and sort)
## working with Objects; accessing keys and values of an Object as arrays
## arrays are objects
## understand the concepts of pass-by-reference and pass-by-value
When a function is invoked one can pass in arguments to the function.  

Primitives are passed by value (meaning a **copy** of the primitive is assigned to the corresponding parameter inside the function), and therefore the original variable from the calling context cannot be modified from within the function.

Objects are passed by reference (meaning a reference to the same object is assigned to the corresponding parameter inside the function), and therefore the object pointed to by the original variable from the calling context can be modified from within the function.

For example:

```javascript
function rv(val, ref) {
  val = 2;
  ref[1] = 3;
}

let vp = 5;
let vr = [1, 2];
rv(vp, vr);
console.log(vp);  // 5
console.log(vr);  // [1, 3]
```

## variables as pointers
## console.log vs. return
## truthiness vs. boolean
## function definition and invocation
The function definition is the code that defines what a function does.  i.e. the first 4 lines in the example below

A function invocation is where the function is actually called, running the code in the function's definition.  I.e. the last line here:

```javascript
function rv(val, ref) {
  val = 2;
  ref[1] = 3;
}

rv(vp, vr);
```

## function declarations, function expressions, and arrow functions
The three lines below are a function declaration, a function expression, and an arrow function, respectively.  They are all different syntaxes for creating functions.  On difference with the function declaration is that it is 'hoisted', so it can actually be invoked in the code before execution reaches the function declaration itself.  Function expressions, and arrow functions are not 'hoisted'.

```javascript
function fd() { }
const fe = function () {}
const fa = val => val * 2;
```


## implicit return value of function invocations

As illustrated below, `f2` and `f3` have no value explicitly returned.  `undefined` is then the implicit return value in these cases.  So a function always returns a value.  If no value is explicitly returned then the default value of `undefined` is returned.

```javascript
function f1() { return 1 }
function f2() { return }
function f3() { }
console.log(f1());  // 1
console.log(f2());  // undefined
console.log(f3());  // undefined
```
## first-class functions
Functions in JS are first-class in that they can be assigned to variables, passed to functions, and returned from functions.  This is commonly used by methods like `map` and `filter`.  For example, below we pass the function `double` as a parameter of the method `map`.

```javascript
function double(par) {
  return par + par;
}
console.log([3, "Hi"].map(double));  // [6, 'HiHi']
```

## side-effects

A function returns a value.  Anything else that it does that affects things outside of the function itself is a side effect.  Common examples of side effects include:
- Logging something to the terminal
- Changing the value assigned to a variable from an enclosing scope
- Changing the value of an object passed into the function (by reference)
- Changing some other aspect of the UI (such as a webpage).


## naming conventions (legal vs idiomatic)
There are certain legal requirements for names.  For instance, a variable name may not start with a number.  However, there are much stricter naming conventions that are generally adhered to, so I focus on those:

- Use snake_case.js or lower-case-with-dashes.js to name files
- Use camelCase to name functions and variables
- Use SCREAMING_SNAKE_CASE to name constants
- Use CamelCase to name class constructors (note the initial capitalization)

## be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose. (See below.)
