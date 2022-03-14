/* 수열 최소값 위치 */

/* user code */
function answer(nums) {
  let result = [];

  // 1. 최소값
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }

  // 2. 최소값에 해당하는 위치 index
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) {
      result[count++] = i;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 10, 2],

  // TC: 2
  [4, 5, 7, 4, 8],

  // TC: 3
  [12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
