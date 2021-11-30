const assert = require("chai").assert;

const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", function () {
  it("should return sci_fi for The Expanse", function () {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "The Expanse"),
      "sci_fi"
    );
  });

  it("should return undefined if empty", function () {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
  });
});
