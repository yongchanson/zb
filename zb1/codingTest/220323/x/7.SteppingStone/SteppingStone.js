/**
 * @param n {number}
 * @return {number}
 */

function solution(n) {
  //피보나치 수열 : 1 2 3 5 8 13 21
  const fibonaccis = [];
  fibonaccis[0] = 1;
  fibonaccis[1] = 2;

  for (let i = 2; i < n; i++) {
    fibonaccis[i] = fibonaccis[i - 2] + fibonaccis[i - 1];
  }

  return fibonaccis[n - 1]; //3번째 요소 = index값 : 2
}

solution;
