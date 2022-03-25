/**
 * @param n {number}
 * @return {number}
 */

function solution(n) {
  let count = 1; //테스트케이스 0 = 1이므로 디폴트 1

  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += j; //sum에 1+2+3...n-1순서대로 더합니다.
      if (sum >= n) {
        if (sum == n) count++;
        break;
        //sum==n인 경우 count+=1, sum>n인 경우 break;
      }
    }
  }
  return count;
}

function solution(n) {
  let ret = 0;

  // n부터 0까지 순회합니다.
  for (let i = n; i >= 0; i--) {
    let val = n;
    console.log(` val 1 : ${val}`);
    // n에서 빼기 1씩 하면서 0이 되면 결과에 1을 추가합니다.
    for (let j = 0; j <= n; j++) {
      val -= i - j;
      console.log(` val 2 : ${val}`);
      if (val <= 0) {
        if (val === 0) {
          ret++;
          console.log(`ret : ${ret}`);
        }
        break;
      }
    }
  }

  return ret;
}

//공개된 정답
function solution(n) {
  let ret = 0;

  // n부터 0까지 순회합니다.
  for (let i = n; i >= 0; i--) {
    let val = n;

    // n에서 빼기 1씩 하면서 0이 되면 결과에 1을 추가합니다.
    for (let j = 0; j <= n; j++) {
      val -= i - j;
      if (val <= 0) {
        if (val === 0) ret++;
        break;
      }
    }
  }

  return ret;
}
