/**
 * @param arr {number[]}
 * @param l {number}
 * @return {number}
 */
function solution(arr, l) {
  arr.sort();

  const dp = Array.from(Array(arr.length), () => new Array(l + 1).fill(-1));

  return patientQuantization(arr, 0, l, dp);
}

const INF = 1000000;

function patientQuantization(arr, start, divideCnt, dp) {
  // 기저사례
  if (divideCnt === 1) return calcError(arr, start, arr.length - 1);

  if (dp[start][divideCnt] !== -1) return dp[start][divideCnt];

  let ret = INF;
  for (let next = start + 1; next <= arr.length - (divideCnt - 1); next++) {
    ret = Math.min(ret, calcError(arr, start, next - 1) + patientQuantization(arr, next, divideCnt - 1, dp));
  }

  dp[start][divideCnt] = ret;
  return ret;
}

function calcError(arr, start, end) {
  let cnt = 0;
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (arr[i] !== 0) {
      sum += arr[i];
      cnt++;
    }
  }

  const avg = Math.round(sum / cnt);
  let error = 0;
  for (let i = start; i <= end; i++) {
    if (arr[i] !== 0) {
      error += Math.pow(avg - arr[i], 2);
    }
  }

  return error;
}

solution
