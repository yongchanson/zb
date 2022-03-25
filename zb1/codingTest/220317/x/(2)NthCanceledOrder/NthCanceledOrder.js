/**
 * @param orders {number[]}
 * @param n {number}
 * @returns {number}
 */
function solution(orders, n) {
  let missCount = 0;
  let num = 0;
  let i = 0;
  while (missCount !== n) {
    num++;
    console.log(`num : ${num}`);
    console.log(`order[i]: ${orders[i]}`);
    if (orders[i] === num) {
      i++;
      console.log(`i : ${i}`);
    } else {
      missCount++;
      console.log(`missCount : ${missCount}`);
    }
  }
  return num;
}

solution;

console.log(solution([2, 4, 5, 7], 3));
