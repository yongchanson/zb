/**
 * @param arr {number[]}
 * @return {number}
 */
function solution(arr) {
  if (arr.length % 2 === 0) return 0;

  return arr.reduce((pre, cur) => {
    pre ^= cur
    return pre;
  }, 0);
}

solution
