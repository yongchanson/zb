/**
 * @param num {number}
 * @return {number}
 */

//최종제출 - 1점
function solution(num) {
  let string = num.toString(); //num을 int->string
  let string_reverse = string.split("").reverse().join(""); //ex) 123->["1", "2", "3"]->["3", "2", "1"]->"321"
  let num_reverse = parseInt(string_reverse); ///string을 int으로 변경

  if (Math.abs(num_reverse) > 100000) {
    //제한사항 추가
    return 0;
  } else {
    if (num > 0) {
      return num_reverse;
    } else {
      //음수인경우 -추가
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
