const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  let words = ["Hi", "Bye", "Greetings"];

  it("returns 3 for length of words before tail is performed", () => {
    assert.strictEqual(words.length, 3);
  });
  it("returns 2 for the length of words.", () => {
    assert.strictEqual(tail(words).length, 2);
  });
});
