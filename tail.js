const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed.${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed. ${actual} !== ${expected}`);
  }
};

const  tail = function(arr) {
  let b = arr.slice(1);
  return b;
};
  
const result = (tail([5, 7, 6]));
assertEqual(result.length, 2);


