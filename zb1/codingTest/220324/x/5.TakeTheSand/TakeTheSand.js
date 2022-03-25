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

function solution(num) {
  return num % 4 == 0 ? false : true;
}

function solution(num) {
  return !!(num % 4);
}

solution;
