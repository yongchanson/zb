/* 5. 중복 단어 제거 */

/* user code */
//new Set(arr) : 중복값 제거
//Araay.from(값) : `new Set(arr)`의 값을 `new_arr` 배열로 반환(얕은복사, 새로운복사)
function answer(arr) {
  let new_arr = [];

  new_arr = Array.from(new Set(arr)); //new Set(arr) : { 'a', 'b', 'c' }

  return new_arr;
}

/* main code */
let input = [
  // TC: 1
  ["john", "alice", "alice"],
  // TC: 2
  ["Hello", "hello", "HELLO", "hello"],
  // TC: 3
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
