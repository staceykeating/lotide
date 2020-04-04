const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤠🤠🤠Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  array1 = []; 
  array2 = [];
  if (Object.keys(object1).length === Object.keys(object2).length) {
  for (let value of Object.values(object1)) {
    array1.push(value);
  }
  for (let value of Object.values(object2)) {
    array2.push(value);
  }
  
  for (let x = 0; x <= array1.length; x++) {
    if (array1[x] === array2[x])
    return true;
  }
}
else return false; 

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`🤠🤠🤠Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "1", a: "2" };
assertObjectsEqual(ab, ba);
