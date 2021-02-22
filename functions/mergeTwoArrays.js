const merge = (arr1, arr2) => {
  let mergedArray = [];
  let a = 0;
  let b = 0;

  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] > arr2[b]) {
      mergedArray.push(arr2[b]);
      b += 1;
    } else {
      mergedArray.push(arr1[a]);
      a += 1;
    }
  }
  while (b < arr2.length) {
    mergedArray.push(arr2[b]);
    b += 1;
  }
  while (a < arr1.length) {
    mergedArray.push(arr1[a]);
    a += 1;
  }

  return mergedArray;
};

module.exports = merge;
