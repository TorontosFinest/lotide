const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion passed.${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`);
    }
  };

  function head(arr) {
    if (arr.length > 0) {
      return arr[0];
    }
    return undefined;
  }
