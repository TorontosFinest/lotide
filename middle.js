const middle = function (arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    let mid1 = arr.length / 2 - 1;
    let mid2 = arr.length / 2;
    return [arr[mid1], arr[mid2]];
  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
};

module.exports = middle;
