const eqArrays = require("./eqArrays");
const eqObjects = function (obj1, obj2) {
  let Arr1 = Object.keys(obj1);
  let Arr2 = Object.keys(obj2);

  if (Arr1.length !== Arr2.length) {
    return false;
  }

  for (val of Arr1) {
    if (Array.isArray(obj1[val]) || Array.isArray(obj2[val])) {
      if (!eqArrays(obj1[val], obj2[val])) {
        return false;
      }
    } else if (obj1[val] === obj2[val]) {
      return true;
    }
  }
  return false;
};

module.exports = eqObjects;
