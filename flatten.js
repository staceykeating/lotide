const flatten = (array) => {
  let newArray = [];
  
  for (let x = 0; x < array.length; x++) {
    if (Array.isArray(x)) {
      for (let y = 0; y < x.length; y++) {
        newArray += array[x][y];
      }
    } else newArray += array[x];
  }
  
  return Array.from(newArray.split(",").join(""));
};

module.exports = flatten;
const emojis = ["😎", ["💩", "🤗"], "😼", "😂"];
console.log(flatten(emojis));

console.log(flatten([1, 2, [3, 4], 5, [6]]));