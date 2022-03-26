/**
 * @param num {number}
 * @returns {boolean}
 */

//num=1 : false
//num=2 : true
//num=3 : ture
//num=4 : false

//재풀이 - 1점
function solution(num) {
  //num=1 : false
  //num=2 : true
  //num=3 : ture
  //num=4 : false
  //결론 : num%4 = 1,0이면 false이고 2,3이면 true
  return num % 4 >= 2 ? true : false;
}

//재풀이 - 1점

//제한사항 "`1kg`이 자기 차례에 남으면 승리합니다." 를 고려하여 재작성
//num%4=1 : true로 변경
function solution(num) {
  return num % 4 == 0 ? false : true;
}

//제공한 풀이
function solution(num) {
  return !!(num % 4);
}

solution;
