var eqArrays = function(arr1, arr2) {

    for (var i = 0; arr1.length < i; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
    } else {
      console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
    }
  };



  
  