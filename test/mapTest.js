const assert = require("chai").assert;

const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];
const results = ["g", "c", "t", "m", "t"];
const words1 = ["hello", "world"];

describe("#map", () => {
  it("should return [ 'g', 'c', 't', 'm', 't' ] for callback at 0", () => {
    assert.deepEqual(
      map(words, (word) => word[0]),
      results
    );
  });

  it("should return [ 'e', 'o'] for callback at index 1", () => {
    assert.deepEqual(
      map(words1, (word) => word[1]),
      ["e", "o"]
    );
  });
});
