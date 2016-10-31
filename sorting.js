

JSDS.Sorting.bubbleSort = function(list) {
  console.log('Bubble sorting the list: ', list);
  for(var i=0;i<list.length;i++) {
    for(var j=list.length-1;j>i;j--) {
      if(list[j] < list[j-1]) {
        var b = list[j];
        list[j] = list[j-1];
        list[j-1] = b;
      }
    }
  }
  return list;
}

/*
* This is the most commonly found implementation of Bubble sort, that sorts from the beginning.
* We did the opposite for fun.
*/
// JSDS.Sorting.bubbleSortFromBeginning = function(list) {
//   console.log('Bubble sorting the list: ', list);
//   for(var j=list.length-1;j>=0;j--) {
//     for(var i=0;i<j;i++) {
//       if(list[i] > list[i+1]) {
//         var b = list[i];
//         list[i] = list[i+1];
//         list[i+1] = b;
//       }
//     }
//   }
//   return list;
// }

JSDS.Sorting.insertionSort = function(list) {
  console.log('Insertion sorting the list: ', list);
  for(var i=1;i<list.length;i++) {
    for(var j=i;j>=0;j--) {
      if(list[j-1] > list[j]) {
        var b = list[j];
        list[j] = list[j-1];
        list[j-1] = b;
      }
    }
  }
  return list;
}

JSDS.Sorting.mergeSort = function(list) {
  console.log('Merge sorting the list: ', list);

  if(list.length <= 1) {
    return list;
  }

  var list1 = [];
  var list2 = [];
  var end = list.length;
  var mid = end*.5;

  for(var i=0;i<end;i++) {
    if(i<mid) {
      list1.push(list[i]);
    } else {
      list2.push(list[i]);
    }
  }

  list1 = JSDS.Sorting.mergeSort(list1);
  list2 = JSDS.Sorting.mergeSort(list2);

  return JSDS.Utils.mergeSortedArrays(list1, list2);
}

JSDS.Sorting.quickSort = function(list, lo, hi) {
  console.log('Quick sorting the list: ', list);

  if(typeof lo == "undefined") {
    var lo = 0;
    var hi = list.length-1;
  }

  if(lo < hi) {
    var p = JSDS.Utils.partition(list, lo, hi);
    JSDS.Sorting.quickSort(list, lo, p-1);
    JSDS.Sorting.quickSort(list, p+1, hi);
  }
  return list;
}
