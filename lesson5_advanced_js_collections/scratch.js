let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
console.log(deepCopiedArr);
console.log(deepCopiedArr[0]);
console.log(deepCopiedArr[1]);
