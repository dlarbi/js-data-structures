JSDS.Utils = {};
JSDS.Utils.mergeSortedArrays = function(array1, array2) {
  /*
  * Merges to sorted arrays into a big sorted array
  */

  var i = 0;
  var j = 0;
  var result = [];
  while(i < array1.length && j < array2.length) {
    if(array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  while(i < array1.length) {
    result.push(array1[i]);
    i++;
  }

  while(j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  return result;
}

JSDS.Utils.swapArrayElements = function(list, i, j) {
  var b = list[i];
  list[i] = list[j];
  list[j] = b;
}

JSDS.Utils.partition = function(list, lo, hi) {
  var pivot = list[hi];
  var i = lo;
  for(var j=lo;j<hi;j++) {
    if(list[j] < pivot) {
      JSDS.Utils.swapArrayElements(list, i, j);
      i++;
    }
  }
  JSDS.Utils.swapArrayElements(list, i, hi);
  return i;
}
