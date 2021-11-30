function without(source, remove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (source[i] === remove[j]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
}
module.exports = without;
