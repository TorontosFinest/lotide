const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1];
const test2 = [2, 4, 6, 8, 9];

describe("#takeUntil", () => {
  it("should return [ 1,2,3,4,5,6,7,8,9 ] for until x is less than 0", () => {
    assert.deepEqual(
      takeUntil(test, (x) => x < 0),
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    );
  });

  it("should return [ 1,2,3,4,5,6,7,8,9 ] for until x is less than 0", () => {
    assert.deepEqual(
      takeUntil(test2, (x) => x % 2 !== 0),
      [2, 4, 6, 8]
    );
  });
});
