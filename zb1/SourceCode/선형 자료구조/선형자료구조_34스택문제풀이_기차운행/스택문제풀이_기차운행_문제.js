/* 기차 운행 */

/* user code */
function answer(train) {
  let stack = [];
  let num = 0;

  for (let i = 0; i < train.length; i++) {
    //순서 : while돌고 false이면 -> if
    while (stack.length == 0 || stack[stack.length - 1] < train[i]) {
      //[3,2,1] 인경우 stack가장오른쪽값<3
      stack.push(++num);
    }

    if (stack[stack.length - 1] == train[i]) {
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
