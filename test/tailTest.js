const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {
  it("returns 'Yo' for 'Yo Yo' tail", () => {
    assert.deepEqual(tail(["Yo", "Yo"]), ["Yo"]);

  });
  it("returns '2, 3, 4' for '1, 2, 3, 4' tail", () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]);

  });
})
