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

solution;

//스택 사용
function solution(s) {
  let answer = [];
  
  for (let i = 0; i < s.length; i++) {
    if (answer.length === 0) {
      answer.push(s[i]);
    } else if (answer[answer.length - 1] === s[i]) {
      answer.pop();
    } else {
      answer.push(s[i]);
    }
  }

  answer = answer.join("");
  return answer;
}



function solution(s) {
  const stack = [];

  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }

  return stack.join("");
}

function rmv_substr(s) {}

function solution(s) {
  while (true) {
    let done_flag = true;
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] == s[i + 1]) {
        s = s.replace(s[i] + s[i], "");
        done_flag = false;
      }
    }
    if (done_flag) return s;
  }
}