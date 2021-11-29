const assert = require("chai").assert;
const findKey = require("../findKey");
const test = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

describe("#findKey", function () {
  it("should return Akaleri for stars === 3", function () {
    assert.strictEqual(
      findKey(test, (cb) => cb.stars === 3),
      "Akaleri"
    );
  });

  it("should return noma for stars === 2", function () {
    assert.strictEqual(
      findKey(test, (cb) => cb.stars === 2),
      "noma"
    );
  });
});
