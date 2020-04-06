function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🤠🤠🤠Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arrayOne, arrayTwo) {
  let stringOne = arrayOne.toString();
  let stringTwo = arrayTwo.toString();
  
  if (stringOne === stringTwo) {
    return true;
  } else return false; 
};

function flatten(array) {

let newArray = [];

for (let x = 0; x < array.length; x++) {
  if (Array.isArray(x))
  for (let y = 0; y < x.length; y++) {
    newArray+= array[x][y]
  }
  else newArray+= array[x];
  }
return Array.from(newArray.split(",").join(""));
};
const emojis = ["😎", ["💩", "🤗"], "😼", "😂"];
console.log(flatten(emojis));

console.log(flatten([1, 2, [3, 4], 5, [6]]));