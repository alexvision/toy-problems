var reverseList = function(head) {
    var storage = [];
    var node = head;

    if (!head){
        return [];
    }
    
    while(node !== null){
        storage.push(node.val);
        node = node.next;
    }

    var newNodeHead = new ListNode(storage.pop());
    var newNode = newNodeHead;
    while(storage.length){
        var nextNode = new ListNode(storage.pop());
        newNode.next = nextNode;
        newNode = nextNode;
    }
    return newNodeHead;
    
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var node = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
node.next = node2;
node2.next = node3;

console.log(reverseList(node));