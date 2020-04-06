const eqArrays = (arrayOne, arrayTwo) => {
  let stringOne = arrayOne.toString();
  let stringTwo = arrayTwo.toString();
  
  if (stringOne === stringTwo) {
    return true;
  } else return false;
};

module.exports = eqArrays;