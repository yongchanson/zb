/*** 1. 대소비교 ***/

/* user code */
function answer(x, y) {
  let result = "";

  if (x > y) {
    result = ">";
  } else if (x < y) {
    result = "<";
  } else if (x == y) {
    result = "=";
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [3, 5],
  // TC: 2
  [7, 4],
  // TC: 3
  [2, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
