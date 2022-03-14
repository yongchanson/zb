/* 체스 세트 */

/* user code */
function answer(chess) {
  let result = [];

  // p1 = 1;
  // p2 = 2;
  // p3 = 8;

  p = [1, 1, 2, 2, 2, 8];

  // for (i = 0; i < chess.length; i++) {
  //   if (chess[i] == p[i]) {
  //     result[i] = 0;
  //   } else {
  //     result[i] = p[i] - chess[i];
  //   }
  // }

  for (i = 0; i < chess.length; i++) {
    result[i] = p[i] - chess[i];
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [0, 1, 2, 2, 2, 7],

  // TC: 2
  [2, 1, 2, 1, 2, 1],

  // TC: 3
  [0, 1, 1, 5, 3, 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
