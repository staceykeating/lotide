const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤠🤠🤠Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  const results = {
  };
  for (let letter of letters) {
    if (results[letter])
      results[letter] ++;
    else {
      results[letter] = 1;
    }
  }
  return results;
};
countLetters('LHL');
countLetters('Lighthouse');
assertEqual(JSON.stringify(countLetters('LHL')),JSON.stringify({L: 2, H: 1}));