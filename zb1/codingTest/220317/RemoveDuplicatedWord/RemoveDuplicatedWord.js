/**
 * @param s {string}
 * @returns {string}
 */
function solution(s) {
  const stack = [];
  for (const c of s) {
    if (stack.length && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  var answer = "";
  for (const c of stack) {
    answer = answer.concat(c);
  }
  return answer;

}

solution
