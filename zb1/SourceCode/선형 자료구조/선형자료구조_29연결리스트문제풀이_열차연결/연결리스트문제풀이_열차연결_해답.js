/* user code */
function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(nums) {
  let ll = new LinkedList();

  // 1. Train 객체를 nums 수만큼 만들고, next를 이용해서 열차 간 연결
  // 연결 작업: 이전 Train 객체.next = 현재 Train 객체

  // 2. 가장 첫번째 Train 객체는 this.head로 연결
  let current, prev;
  for (let i = 0; i < nums.length; i++) {
    current = new Train(nums[i]);

    if (i === 0) {
      ll.head = current;
    } else {
      prev.next = current;
    }

    prev = current;
  }

  return ll;
}

/* main code */
let input = [
  // TC: 1
  [4, 7, 1, 10, 6],

  // TC: 2
  [3, 10, 6, 9, 11, 3, 4],

  // TC: 3
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  answer(input[i]).printNode();
}
