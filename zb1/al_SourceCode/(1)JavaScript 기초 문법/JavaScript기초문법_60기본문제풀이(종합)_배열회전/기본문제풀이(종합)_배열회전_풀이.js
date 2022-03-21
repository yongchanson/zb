/* 8. 배열 회전 */

/* user code */
// let t;
// for (let i = 0; i < input.length / 2; i++) {
//   t = input[i];
//   input[i] = input[input.length - 1 - i];
//   input[input.length - 1 - i] = t;
// }

// for문(절반) : `i < user.length / 2`
// 대칭 : `user[i] = user[user.length - 1 - i]`
function answer(user) {
  let reverse = [];
  //fot문 절반만 경유하는 풀이
  let tmp;
  for (let i = 0; i < user.length / 2; i++) {
    tmp = user[i];
    user[i] = user[user.length - 1 - i];
    user[user.length - 1 - i] = tmp;
  }
  reverse = user;

  return reverse;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [-1, 6, "hello", -15],
  // TC: 3
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
