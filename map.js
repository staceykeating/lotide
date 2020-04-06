const assertArraysEqual = require('./assertArraysEqual');

const map = (array, callBack) => {

const results = [];
  for (let item of array) {
    results.push(callBack(item)); 
  }
  return results;
};
module.exports = map;
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual((results1), ("g,c,t,m,t"));