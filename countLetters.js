const countLetters = (letters) => {
  const results = {};

  for (const letter of letters) {
    if (results[letter])
      results[letter] ++;
    else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;

countLetters('LHL');
countLetters('Lighthouse');
assertEqual(JSON.stringify(countLetters('LHL')),JSON.stringify({L: 2, H: 1}));