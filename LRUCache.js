var Node = function(value){
  this.prev = null;
  this.next = null;
  this.value = value;
};
Node.prototype.delete = function () {
  if (this.prev) { this.prev.next = this.next; }
  if (this.next) { this.next.prev = this.prev; }
};

var LinkedList = function() {
  this.head = null;
  this.tail = null; 
  this.length = 0;
}
LinkedList.prototype.moveToHead = function(node) {
    if(node === this.head){
      // console.log("ALREADY HEAD");
      return;
    }
    if (node === this.tail){
      // console.log("TAIL TO HEAD")
      this.deleteFromTail();
      this.addToHead(node);
      return;
    }
    // console.log('this.head =', this.head);
    // console.log('node =', node);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.addToHead(node);
};

LinkedList.prototype.deleteFromTail = function() {
  // var temp = this.tail;
  // if(this.tail.prev){
  //   this.tail.prev = null;
  // } else {
  //   //empty nodes now! 
  //   this.head = null;
  //   this.tail = null;
  // }
  // this.length--;
  // return temp.value;
    // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  // Not empty list.
  } else {
    var tail = this.tail;
    this.tail = this.tail.prev;
    tail.delete();
    this.length--;
    return tail.value;
  }
};

LinkedList.prototype.addToHead = function(node) {
  //handles the case of a preused node 
  node.prev = null;
  //handles a new empty node
  if (this.head === null){
    this.head = node;
    this.tail = this.head;
  } else {
    //handles a exsiting/non-empty list
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
  this.length++;
  return node;
};


// var ll = new LinkedList; 
// var node1 = new Node(1);
// var node2 = new Node(2);
// var node3 = new Node(3);
// var node4 = new Node(4);
// console.log('ll Head =', ll.head);
// // for (var i = 0; i < 5; i++) {
// //   ll.addToHead(new Node(i))
// // };
// ll.addToHead(node1);
// ll.addToHead(node2);
// ll.addToHead(node3);
// ll.addToHead(node4);
// ll.moveToHead(node3);

// console.log(ll.head);
// console.log('node4 =', node4);
// console.log('node2 =', node2);

/**
 * @constructor
 */
var LRUCache = function(capacity) {
  //storing a key and a pointer to the location in order
  this.storage = {};
  this.list = new LinkedList();
  this.max = capacity;
  
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
  if(key === 12){
    // console.log(this.storage);
    // console.log('this.list =', this.list);
  }
  if(key in this.storage){ 
    var node = this.storage[key][0];
    this.list.moveToHead(node);
    return this.storage[key][1];
  } else {
    return -1; 
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
  if (key in this.storage) {
    this.storage[key][1] = value;
    var node = this.storage[key][0];
    // console.log('set existing node =', node);
    this.list.moveToHead(node);
  } else {
    var node = new Node(key);
    // console.log('set new node pre=', node);
    this.list.addToHead(node);
    // console.log('set new node post=', node);
    this.storage[key] = [node, value];
    
    if(this.list.length > this.max){
      var k = this.list.deleteFromTail();
      delete this.storage[k];
    }
  }

};

// var cache = new LRUCache(2);

// // cache.set("blah","things");
// // cache.set("blahy","more things");
// // cache.set(3,"stuff");
// // cache.set(4,"wooh");
// // console.log(cache.get("blah"));
// // console.log(cache.get(3));
// console.log(cache.get(2));
// cache.set(2,6)
// console.log(cache.get(1));
// cache.set(1,5);
// cache.set(1,2);
// cache.set(3,4);
// console.log(cache.get(1));
// console.log(cache.get(2));
// console.log(cache.get(3));

var c = new LRUCache(10); 
// c.set(10,13);
// c.set(3,17); 
// c.set(6,11)
// c.set(10,5)
// c.set(9,10)
// console.log(c.get(13));
// c.set(2,19)
// console.log(c.get(2));
// console.log(c.get(3));
// c.set(5,25)
// console.log(c.get(8));
// c.set(1,1)
// c.set(2,2)
// c.set(3,3)
// c.set(4,4)
// console.log(c.get(4));
// console.log(c.get(3));
// console.log(c.get(2));
// console.log(c.get(1));
// c.set(5,5)
// console.log(c.get(1));
// console.log(c.get(2));
// console.log(c.get(3));
// console.log(c.get(4));
// console.log(c.get(5));

c.set(10,13)
c.set(3,17)
c.set(6,11)
c.set(10,5)
c.set(9,10)
console.log(c.get(13));
c.set(2,19)
console.log(c.get(2));
console.log(c.get(3));
c.set(5,25)
console.log(c.get(8));
c.set(9,22)
c.set(5,5)
c.set(1,30)
console.log(c.get(11));
c.set(9,12)
console.log(c.get(7));
console.log(c.get(5));
console.log(c.get(8));
console.log(c.get(9));
c.set(4,30)
c.set(9,3)
console.log(c.get(9));
console.log(c.get(10));
console.log(c.get(10));
c.set(6,14)
c.set(3,1)
console.log(c.get(3));
c.set(10,11)
console.log(c.get(8));
c.set(2,14)
console.log(c.get(1));
console.log(c.get(5));
console.log(c.get(4));
c.set(11,4)
c.set(12,24)
c.set(5,18)
console.log(c.get(13));
c.set(7,23)
console.log(c.get(8));
console.log(c.get(12));
c.set(3,27)
c.set(2,12)
console.log(c.get(5));
c.set(2,9)
c.set(13,4)
c.set(8,18)
c.set(1,7)
console.log(c.get(6));
c.set(9,29)
c.set(8,21)
console.log(c.get(5));
c.set(6,30)
c.set(1,12)
console.log(c.get(10));
c.set(4,15)
c.set(7,22)
c.set(11,26)
c.set(8,17)
c.set(9,29)
console.log(c.get(5));
c.set(3,4)
c.set(11,30)
console.log(c.get(12));
c.set(4,29)
console.log(c.get(3));
console.log(c.get(9));
console.log(c.get(6));
c.set(3,4)
console.log(c.get(1));
console.log(c.get(10));
c.set(3,29)
c.set(10,28)
c.set(1,20)
c.set(11,13)
console.log(c.get(3));
c.set(3,12)
c.set(3,8)
c.set(10,9)
c.set(3,26)
console.log(c.get(8));
console.log(c.get(7));
console.log(c.get(5));
c.set(13,17)
c.set(2,27)
c.set(11,15)
console.log(c.get(12));
c.set(9,19)
c.set(2,15)
c.set(3,16)
console.log(c.get(1));
c.set(12,17)
c.set(9,1)
c.set(6,19)
console.log(c.get(4));
console.log(c.get(5));
console.log(c.get(5));
c.set(8,1)
c.set(11,7)
c.set(5,2)
c.set(9,28)
console.log(c.get(1));
c.set(2,2)
c.set(7,4)
c.set(4,22)
c.set(7,24)
c.set(9,26)
c.set(13,28)
c.set(11,26)

