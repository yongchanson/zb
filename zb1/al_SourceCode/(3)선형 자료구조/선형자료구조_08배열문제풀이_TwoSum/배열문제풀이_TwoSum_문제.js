/* two sum */

/* user code */
function answer(nums, target) {
  // result = [];

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        // if (i > j) {
        //   result.push = j;
        //   result.push = i;
        // } else {
        //   result.push = i;
        //   result.push = j;
        // }
        return [i, j];
      }
    }
  }
  return []; //만약 문제있으면 빈배열 출력
}

/* main code */
let input = [
  // TC: 1
  [[2, 7, 11, 15], 9],

  // TC: 2
  [[3, 2, 4], 6],

  // TC: 3
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
