const takeUntil = function (items, callBack) {

array = []
// return items.filter(item => item = !callBack(item)? true : false); 

for (let i = 0; i < items.length; i++) {
  if (callBack(items[i])) {
    return array;
  }
  array.push(items[i]);
}
  return array;

}
//for loop? slice?

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
