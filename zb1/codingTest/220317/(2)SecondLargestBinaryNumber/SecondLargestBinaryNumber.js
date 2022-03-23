/**
 * @param n {number}
 * @returns {number}
 */
function solution(n) {
  let result = 0
  for (let i = 1; i <= n; i++) {
    result += getSecondLargestBitNumber(i)
  }
  return result
}

function getSecondLargestBitNumber(n) {
  let max = 1 << 30
  let count = 0

  for (; max > 0; max >>= 1) {
    if (max & n) {
      if (count === 1) {
        count++
        continue
      }

      count++
      n -= max
    }
  }

  return n
}

solution