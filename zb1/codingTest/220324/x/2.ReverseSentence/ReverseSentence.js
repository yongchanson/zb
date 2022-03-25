/**
 * @param s {string}
 * @return {string[]}
 */
function solution(s) {
  return s
    .split(/[.,!? ]/) //정규식 사용
    .filter((word) => word !== "") //""가 아닌 요소를 모아 새로운 배열로 반환
    .map((word) => word.split("").reverse().join("")); //ex) abc->["a","b","c"]->["c","b","a"]->cba
}

solution;
