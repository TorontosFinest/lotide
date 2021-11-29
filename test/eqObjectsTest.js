const assert = require("chai").assert;

const eqObjects = require("../eqObjects");

const ab = { a: 1, b: 2 };
const ba = { b: 2, a: 1 };
const abc = { a: 1, b: 2, c: 3 };
const ab1 = { a: "1", b: "2" };

describe("#eqObjects", () => {
  it("should return true for ab and ba ", function () {
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it("should return false for ab and abc ", function () {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it("should return false for ab and ab1 ", function () {
    assert.deepEqual(eqObjects(ab, ab1), false);
  });
});
