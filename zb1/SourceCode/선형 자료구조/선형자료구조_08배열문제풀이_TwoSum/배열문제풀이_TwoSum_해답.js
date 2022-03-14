/* two sum */

/* user code */
function answer(nums, target) {
  let map = {}; // key, value

  // target - nums[i] = nums[j]
  // for 2중 O(n^2) -> for 1중 O(n)
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != undefined) {
      //map[x]라는 키가 존재한다면
      return [map[target - nums[i]], i];
    }

    map[nums[i]] = i;
  }
  /*
  { '2', 0 }
  map[2] != undefinde 조건만족
  return [ [map[2]의 인덱스(0), 본인인덱스(1)] ]


  */
  return [];
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
