JSDS.DataStructures.BST = function() {

  this.root = null;

  var Node = function(key, value, parent, lChild, rChild) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.lChild = lChild;
    this.rChild = rChild;
  }

  this.search = function(node, key) {
    var result = 'Tree empty'
    if(!node) {
      return result;
    } else if(key == node.key) {
      result = node;
    } else if(key < node.key) {
      result = this.search(node.lChild, key);
    } else {
      result = this.search(node.rChild, key);
    }
    return result;
  }

  this.insert = function(node, key, value, parent) {
    if(!this.root) {
      this.root = new Node(key, value, null, null, null);
    } else if(!node) {
      node = new Node(key, value, parent, null, null);
    } else if(key < node.key) {
      node.lChild = this.insert(node.lChild, key, value, node);
    } else {
      node.rChild = this.insert(node.rChild, key, value, node);
    }
    return node;
  }

  this.buildSortedArray = function(array, node) {
    if(!node.lChild) {
      array.push(node);
    } else {
      this.buildSortedArray(array, node.lChild);
      array.push(node);
    }
    if(node.rChild) {
      this.buildSortedArray(array, node.rChild);
    }
    return array;
  }

  this.buildFromUnsortedArray = function(array, bst) {

    //var array = JSDS.Sorting.mergeSort(array);
    var mid = array[Math.round(array.length*.5)];
    bst.insert(bst.root, mid, array[mid]);
    if(mid) {
      var lHalf = array.slice(0, mid);
      var rHalf = array.slice(mid+1, array.length-1);
      this.buildFromUnsortedArray(lHalf, bst);
      this.buildFromUnsortedArray(rHalf, bst);
    }

    return bst;
  }
}

JSDS.DataStructures.LinkedList = function() {

  var Node = function(value, next) {
    this.value = value;
    this.next = null;
  }

  this.head = null;
  this.tail = null;

  this.insert = function(value) {
    if(!this.head) {
      this.head = new Node(value, null);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value, null);
      this.tail = this.tail.next;
    }
  }

}

var LL = new JSDS.DataStructures.LinkedList()
LL.insert(4);
LL.insert(5);
LL.insert(2);
console.log(LL)
