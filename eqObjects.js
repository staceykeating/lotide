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
  
  for (let value of Object.values(object1)) {
    array1.push(value);
  }
  for (let value of Object.values(object2)) {
    array2.push(value);
  }
  
  for (let x = 0; x <= array1.length; x++) {
    if (array1[x] === array2[x])
    return true;
    else return false; 
}
};


const ab = { a: "1", b: "2" };
const ba = { b: "1", a: "2" };
assertEqual(eqObjects(ab, ba), true); 

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


