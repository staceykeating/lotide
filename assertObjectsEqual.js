const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`🤠🤠🤠Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
const ab = { a: "1", b: "2" };
const ba = { b: "1", a: "2" };
assertObjectsEqual(ab, ba);
