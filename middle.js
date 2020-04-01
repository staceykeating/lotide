
const eqArrays = function(arrayOne, arrayTwo) {
  let stringOne = arrayOne.toString();
  let stringTwo = arrayTwo.toString();
  
  if (stringOne === stringTwo) {
    return true;
  } else return false;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let stringOne = arrayOne.toString();
  let stringTwo = arrayTwo.toString();
  
  if (stringOne === stringTwo) {
    console.log(`🤠🤠🤠Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else
    console.log(`😡😡😡Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
};


const middle = function(array) {
  let middle = [];
  if (array.length % 2 === 0) {
    middle.push(array[Math.floor((array.length - 1) / 2)]);
    middle.push(array[Math.ceil((array.length - 1) / 2)]);
  } else
    middle.push(array[Math.ceil((array.length - 1) / 2)]);
  return middle;
};

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle(["one","two","three","four"]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);