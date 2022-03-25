/**
 * @param num {number}
 * @return {number}
 */

//최종제출 - 1점
function solution(num) {
  let string = num.toString();
  let string_reverse = string.split("").reverse().join("");
  let num_reverse = parseInt(string_reverse);

  if (Math.abs(num_reverse) > 100000) {
    return 0;
  } else {
    if (num > 0) {
      return num_reverse;
    } else {
      return -num_reverse;
    }
  }
}

function solution(num) {
  let reverseNumber = 0;
  const NEGATIVE = num < 0;

  if (NEGATIVE) num *= -1;

  for (let i = num; i; i = Math.trunc(i / 10)) {
    reverseNumber = reverseNumber * 10 + (i % 10);
  }

  if (100000 < reverseNumber) {
    return 0;
  }

  return NEGATIVE ? -reverseNumber : reverseNumber;
}

solution;
