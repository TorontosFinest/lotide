const assert = require("chai").assert;

const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("should return { h: 1, e: 1, l: 2, o: 1 } when 'hello' is passed", function () {
    assert.deepEqual(countLetters("hello"), { h: 1, e: 1, l: 2, o: 1 });
  });

  it("should return { h: 2, e: 2, l: 4, o: 2 } when 'hello hello' is passed", function () {
    assert.deepEqual(countLetters("hello hello"), { h: 2, e: 2, l: 4, o: 2 });
  });
});
