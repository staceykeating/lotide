const assertEqual = require('./assertEqual');

const findKeyByValue = (objectArray, keyValue) => {
    for (let key in objectArray) {
        if(objectArray[key] == keyValue){
            return key;
        }
    }
 return undefined;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
module.exports = findKeyByValue;

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);