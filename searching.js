JSDS.Searching.binarySearch = function(needle, haystack) {
  /*
  * Search a sorted list
  * 1) Find mid element of list
  * 2) if mid element is larger than search term, its in the left side of the list, else its in the right side of the list, else its the correct value
  * 3) binary search the selected side of the list
  */
  var mid = Math.round(haystack.length*.5);
  var result;
  if(haystack[mid].value == needle) {
    return haystack[mid];
  } else if(haystack[mid].value > needle) {
    result = JSDS.Searching.binarySearch(needle, haystack.splice(0, mid));
  } else {
    result = JSDS.Searching.binarySearch(needle, haystack.splice(mid, haystack.length-1));
  }
  return result;
}
