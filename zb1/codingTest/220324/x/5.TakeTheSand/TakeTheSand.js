/**
 * @param num {number}
 * @returns {boolean}
 */

//num=1 : false
//num=2 : true
//num=3 : ture
//num=4 : false

function solution(num) {
  //num=1 : false
  //num=2 : true
  //num=3 : ture
  //num=4 : false
  //결론 : num%4 = 1,0이면 false이고 2,3이면 true
  return num % 4 >= 2 ? true : false;
}
/*
제한사항에 "`1kg`이 자기 차례에 남으면 승리합니다." 와 같은 문구가 있어
아래코드로 변경함(테스트케이스결과는 변화없음)
*/
function solution(num) {
  return num % 4 == 0 ? false : true;
}

//제공한 풀이
function solution(num) {
  return !!(num % 4);
}

solution;
