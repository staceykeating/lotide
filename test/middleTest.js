const assert = require('chai').assert;
const middle = require(`../middle`);

describe("middle", () => {
  it ("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it ("returns ['two','three'] for ['one',two','three','four']", () => {
    assert.deepEqual(middle(["one","two","three","four"]), ["two","three"]);
  });
});
