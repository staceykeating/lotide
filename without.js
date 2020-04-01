function assertArraysEqual(arrayOne, arrayTwo) {
  let stringOne = arrayOne.toString();
  let stringTwo = arrayTwo.toString();
  
  if (stringOne === stringTwo) {
    console.log(`🤠🤠🤠Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else 
    console.log(`😡😡😡Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
};

function without(source, itemsToRemove) {
  return source.filter(item => !itemsToRemove.includes(item));
}


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without([1, 2, 3], [1, 2])); // => [3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));  // => [1, 2]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);