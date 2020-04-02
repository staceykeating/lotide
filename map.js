function assertArraysEqual(arrayOne, arrayTwo) {
  let stringOne = arrayOne.toString();
  let stringTwo = arrayTwo.toString();
  
  if (stringOne === stringTwo) {
    console.log(`🤠🤠🤠Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else 
    console.log(`😡😡😡Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
};

const map = function(array, callBack) {

const results = [];
  for (let item of array) {
    results.push(callBack(item)); 
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual((results1), ("g,c,t,m,t"));