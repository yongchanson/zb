/**
 * @param s {string}
 * @returns {string}
 */

function solution(s) {
  let result = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  for (i = 0; i < s.length; i++) {
    result[s[i]]++;
  }
  console.log(result); //output : {{ 0: 0, 1: 2, 2: 3, 3: 1, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

  let result_sort = Object.keys(result).sort(function (a, b) {
    return result[b] - result[a];
  }); //딕셔너리를 value기준으로 정렬하여 key값을 반환

  return result_sort.join(" ");
}

//공개된 정답
function solution(s) {
  const countedArr = getCountedArr(s);
  const orders = getBiggerOrders(countedArr);
  return orders.join(" ");
}

function getCountedArr(s) {
  const result = new Array(10).fill(0);
  for (let i = 0; i < s.length; i++) {
    result[s[i]]++;
  }
  return result;
}

function getBiggerOrders(arr) {
  const order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let high = 1; high < arr.length; high++) {
    for (let low = 0; low < high; low++) {
      if (arr[low] < arr[high]) {
        switching(arr, low, high);
        switching(order, low, high);
      } else if (arr[low] === arr[high] && order[low] > order[high]) {
        switching(order, low, high);
      }
    }
  }
  return order;
}

function switching(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

solution;
