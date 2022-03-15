/* 괄호 계산 */

if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}
/*TC1
mark | stack | temp | result
 (      (       2      0
 (      ((      4      0
 )      (       2      4
 [      ([      6      4
 [      ([[     18     4
 ]      ([      6      22
 ]      (       2      22
 )              1      22     
인접하지 않은 경우 : result+없이 stack.pop, temp/=을 수행
 */

/* user code */
function answer(str) {
  let result = 0;

  let stack = [];
  let temp = 1;
  for (let i = 0; i < str.length; i++) {
    let mark = str[i];

    switch (mark) {
      case "(":
        temp *= 2;
        stack.push(mark);
        break;
      case "[":
        temp *= 3;
        stack.push(mark);
        break;
      case ")":
        if (stack.isEmpty() || stack.peek() != "(") {
          return 0;
        }

        if (str[i - 1] == "(") {
          //()가 연속된 경우
          result += temp;
        }

        stack.pop();
        temp /= 2; //원상복구
        break;
      case "]":
        if (stack.isEmpty() || stack.peek() != "[") {
          return 0;
        }

        if (str[i - 1] == "[") {
          result += temp;
        }
        // console.log(stack);
        stack.pop();
        temp /= 3;
        break;
    }
  }

  if (!stack.isEmpty()) {
    return 0;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  "(()[[]])",

  // TC: 2
  "[][]((])",

  // TC: 3
  "(()[[]])([])",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
