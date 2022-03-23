/**
 * @param arr {number[][]}
 * @return {number}
 */
function solution(arr) {
  const dp = [];

  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j >= 0; j--) {
      if (i === n - 1) {
        dp[i][j] = arr[i][j];
        continue;
      }

      dp[i][j] = arr[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}

solution
