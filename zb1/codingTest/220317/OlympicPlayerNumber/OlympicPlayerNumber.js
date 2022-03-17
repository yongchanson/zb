/**
 * @param arr {number[][]}
 * @param num {number}
 * @returns {number}
 */
function solution(arr, num) {
  let mergedArr = [];
  for (let i = 0; i < arr.length; i++) {
    mergedArr = [].concat(mergedArr, arr[i]);
  }
  mergedArr.sort((a, b) => a - b)
  return mergedArr[num - 1]
}

solution