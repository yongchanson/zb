// Node(): value와 left, right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// BinaryTree(): 시작 노드인 root를 저장하기 위한 생성자
function BinaryTree() {
  this.root = null;
}

// _insertNode(): 재귀로 트리를 순회하며 노드 추가 (내부 사용)
BinaryTree.prototype._insertNode = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value > node.value) {
    node.right = this._insertNode(node.right, value);
  }

  return node;
};

// insert(): 노드 추가
BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

let tree = new BinaryTree();

tree.insert("F");
/*
this.root = null -> F
*/
tree.insert("B");
/*
this.root = F
  F.left = B
*/
tree.insert("A");
/*
this.root = F
  F.left = B
  B.left = A
*/
tree.insert("D");
/*
this.root = F
  F.left = B
  B.left = A
  B.right = D
*/
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);
