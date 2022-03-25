/**
 * @param arr {number[]}
 * @return {number}
 */
// function solution(arr) {
//   if (arr.length % 2 === 0) return 0;

//   return arr.reduce((pre, cur) => {
//     pre ^= cur
//     return pre;
//   }, 0);
// }
// solution

// function solution(arr) {
//   if (arr.length == 2) {
//     return 0;
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//           delete arr[i];
//         }
//       }
//     }
//   }

//   return arr;
// }

function solution(arr) {
  if (arr.length % 2 === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++)
      if (arr.filter((x) => x === arr[i]).length === 1) return arr[i];
    return 0;
  }
}

let input = [
  // TC: 1
  "[1, 2, 1]",

  // TC: 2
  "[1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9]",

  // TC: 3
  "[10, 20, 30, 40, 50, 60, 70, 80, 90, 10, 20, 30, 40, 50, 60, 70, 80]",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution([1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9]));
}
