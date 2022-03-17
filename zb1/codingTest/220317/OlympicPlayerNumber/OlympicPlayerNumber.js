/**
 * @param arr {number[][]}
 * @param num {number}
 * @returns {number}
 */
function solution(arr, Num) {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      list.push(arr[i][j]);
    }
  }
  list.sort(function (x, y) {
    return x - y;
  });
  return list[Num - 1];
}

console.log(
  solution(
    [
      [1, 2, 22],
      [3, 4, 23],
      [8, 9, 33],
    ],
    7
  )
);
