const assert = require("chai").assert;

const letterPositions = require("../letterPositions");

describe("#findKeyByValue", function () {
  it("should return [0,4] when level is entered", function () {
    assert.deepEqual(letterPositions("level").l, [0, 4]);
  });

  it("should returned undefined when inexistent letter is entered", function () {
    assert.deepEqual(letterPositions("hi").l, undefined);
  });
});
