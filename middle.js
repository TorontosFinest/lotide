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
  const middle = function(arr){
    if(arr.length<=2){
        return [];
    }else if(arr.length %2 === 0){
        let mid1 = arr.length/2-1;
        let mid2 = arr.length/2;
        return arr[mid1],arr[mid2];
    }else{
     return [arr[Math.floor(arr.length / 2)]];
    }
 }