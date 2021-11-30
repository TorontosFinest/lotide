const assert = require("chai").assert;

const without = require("../without");

const words = ["Hello", "lighthouse", "students"];

describe("#without", function () {
  it("should return [1] for ([1,2,3] , [2,3]", function () {
    assert.deepEqual(without([1, 2, 3], [2, 3]), [1]);
  });

  it("should return ['lighthouse' ,'students'] for words", function () {
    assert.deepEqual(without(words, ["Hello"]), [words[0], words[1]]);
  });
});
