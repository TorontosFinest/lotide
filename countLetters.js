function countLetters(sentence) {
  let output = {};
  for (letter of sentence) {
    if (letter !== " ") {
      if (output[letter]) {
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
}
module.exports = countLetters;
