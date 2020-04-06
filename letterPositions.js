function assertArraysEqual(arrayOne, arrayTwo) {
  let stringOne = arrayOne.toString();
  let stringTwo = arrayTwo.toString();
  
  if (stringOne === stringTwo) {
    console.log(`🤠🤠🤠Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else 
    console.log(`😡😡😡Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
};

const letterPositions = function(sentence) {
  const results = {};

  for (const index in sentence) {
    if (results[sentence.charAt(index)]) {
      results[sentence.charAt(index)] = [...results[sentence.charAt(index)], index];
    } else {
      results[sentence.charAt(index)] = [index];
      delete results[" "];
    }
  } return results; 
};
module.exports = letterPositions;
console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
assertArraysEqual(JSON.stringify(letterPositions('LHL')),JSON.stringify({L: ['0','2'], H: ['1']}));
assertArraysEqual(letterPositions('LHL'),({L: ['0','2'], H: ['1']}));
