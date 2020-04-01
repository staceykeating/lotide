function assertArraysEqual(arrayOne, arrayTwo) {
  let stringOne = arrayOne.toString();
  let stringTwo = arrayTwo.toString();
  
  if (stringOne === stringTwo) {
    console.log(`🤠🤠🤠Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else 
    console.log(`😡😡😡Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3], [6, 7, 9]);
assertArraysEqual(["yes", "yes"], ["no", "yes"]);
assertArraysEqual(["yes", "yes"], ["yes", "no"]);
assertArraysEqual(["yes", "yes"], ["yes", "yes"]);
