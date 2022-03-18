/* user code */
function File(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(ll) {
  let current = ll.head, //current에 첫번쨰노드가 가리키는 것을 넣음
    prev = null,
    next;

  // 1. 역 방향 정렬
  while (current != null) {
    next = current.next; //next라는 임시값에 current.next을 저장
    current.next = prev; //current.next을 이전객체와 연결 / 현재객체(c).next를 prev로 옮겨주고,
    prev = current; //current의 현재위치를 prev로 업데이트(앞으로 땡김)
    current = next; //current의 포인트를 next가 가리키는곳으로 이동
  }

  // 2. head 업데이트
  ll.head = prev; //null객체 이전에 있는 prev로 해줌

  return ll;
}

/* main code */
let input = [
  // TC: 1
  [7, 3, 1],

  // TC: 2
  [4, 6, 9, 1, 3],

  // TC: 3
  [3, 4, 1, 2, 7, 9, 6],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
};

LinkedList.prototype.makeFiles = function (files) {
  let current = this.head;
  let node;
  for (let i = 0; i < files.length; i++) {
    node = new File(files[i]);
    node.next = current;
    this.head = node;

    current = node;
  }
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);

  let ll = new LinkedList();
  ll.makeFiles(input[i]);
  answer(ll).printNode();
}
