var sortButton = document.getElementById('sort-list-button');
var sortTypeList = document.getElementById('sorting-types');


sortButton.onclick = function() {
  var list = document.getElementById('list').value.split(',');
  var sortType = sortTypeList.value;
  list.forEach(function(el, i, els) {
    list[i] = parseInt(el);
  });
  
  document.getElementById('sort-result').innerHTML = JSDS.Sorting[sortType](list);
  console.log(JSDS.Sorting[sortType](list));
}
