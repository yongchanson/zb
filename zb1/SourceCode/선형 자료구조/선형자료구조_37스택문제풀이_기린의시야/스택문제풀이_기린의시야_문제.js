/* 기린의 시야 */

/* user code */
function answer(giraffe) {
  let result = 0;

  // 코드 구현 시작 영역

  // …

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [10, 3, 7, 4, 12, 2],

  // TC: 2
  [7, 4, 12, 1, 13, 11, 12, 6],

  // TC: 3
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
