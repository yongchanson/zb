// Node()
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoubleLinkedList.prototype.size = function () {
  return this.length;
};

DoubleLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let dll = new DoubleLinkedList();
let node;
console.log(dll);

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);

node = new Node(456);
dll.tail.next = node; //tail.next에 node(456) 만듦
node.prev = dll.tail; //node(456)의 prev -> dll.tail을 연결
dll.tail = node; //dll.tail -> node 연결
dll.length++;
console.log(dll);
