const assertArraysEqual = require('./assertArraysEqual');

const without = (source, itemsToRemove) => {
  return source.filter(item => !itemsToRemove.includes(item));
};
// function without(source, removeItems) {
//   const modified = [];
//   for (let sourceItem of source) {
// //if current sourceItem is not in items that need to be removed
//     // then push it in new array.
//     if (!removeItems.includes(sourceItem)) {
//       modified.push(sourceItem);
//     };
//   }
//   return modified;
// }
module.exports = without;

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without([1, 2, 3], [1, 2])); // => [3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));  // => [1, 2]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

