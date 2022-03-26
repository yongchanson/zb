/**
 * @param arr {number[]}
 * @returns {number}
 */

function solution(arr) {
  new_arr = Array.from(new Set(arr));
  //new Set(arr) = Set(4) { arr[0], arr[1], arr[2] }
  //Array.from(new Set(arr)) = [ arr[0], arr[1], arr[2] ]
  return new_arr.length;
}

function solution(arr) {
  let set = new Set(arr);
  return set.size;
}

solution;
