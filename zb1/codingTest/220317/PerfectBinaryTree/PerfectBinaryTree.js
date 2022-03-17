/**
 * @param n {number}
 * @returns {number}
 */
function solution(n) {
  const MOD = 1_000_000_007;
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= 2;
    result %= MOD;
  }
  return result - 1
}

solution
