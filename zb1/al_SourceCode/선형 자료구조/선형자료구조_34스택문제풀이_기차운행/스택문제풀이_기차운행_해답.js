/* 기차 운행 */

if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1]; //this는 Array자신을 가리킴
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}

/* user code */
function answer(train) {
  let stack = [];
  let num = 0;

  for (let i = 0; i < train.length; i++) {
    while (stack.isEmpty() || stack.peek() < train[i]) {
      //stack.peek() == stack[stack.length - 1] : this자리에 stack대입한다는 뜻
      stack.push(++num);
    }

    if (stack.peek() == train[i]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return true;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3],

  // TC: 2
  [3, 2, 1],

  // TC: 3
  [3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
