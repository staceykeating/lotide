const letterPositions = function(sentence) {
  const results = {};

  for (const index in sentence) {
    if (results[sentence.charAt(index)]) {
    results[sentence.charAt(index)] = [...results[sentence.charAt(index)], index];
    } else {
    results[sentence.charAt(index)] = [index];
    delete results[" "];
    }
}return results; 
};
console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));

