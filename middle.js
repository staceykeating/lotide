const middle = (array) => {
  let middle = [];
  if (array.length % 2 === 0) {
    middle.push(array[Math.floor((array.length - 1) / 2)]);
    middle.push(array[Math.ceil((array.length - 1) / 2)]);
  } else
    middle.push(array[Math.ceil((array.length - 1) / 2)]);
  return middle;
};

module.exports = middle;
