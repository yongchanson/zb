// ### 수학 기본이론

// 4. <u>순열</u>
// let input = ["a", "b", "c"];
// let count = 0;

// function permutation(arr, s, r) {
//   //s=시작, r=뽑을 개수
//   // 1.재귀함수를 멈춰야할 조건
//   console.log(`s:${s}`);
//   if (s == r) {
//     count++;
//     console.log(arr.join(" ")); // join의 역할 : ['a', 'b'] -> ab
//     return;
//   }
//   // 2. 재귀를 돌면서 변경되어야 할 부분(메인로직)
//   for (let i = s; i < arr.length; i++) {
//     console.log(`for1> i:${i}, s:${s}, ${arr}`);
//     [arr[s], arr[i]] = [arr[i], arr[s]]; // 스왑
//     console.log(`for2> i:${i}, s:${s}, ${arr}`);
//     permutation(arr, s + 1, r);
//     console.log(`for3> i:${i}, s:${s}, ${arr}`);
//     [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복구(?)
//     console.log(`for4> i:${i}, s:${s}, ${arr}`);
//   }

//   /*
//   s=0, r=2, i=0 : ['a', ] // arr[s]=arr[i]라서 바뀌지 않음
//   s=1, r=2, i=1 : ['a', 'b', ]
//   s=2, r=2 : ['a', 'b', 'c'] //s=r이므로 배열출력
//   ...
//   s=1, r=2, i=2 : ['a', 'c', ] : arr[s], arr[i] = arr[1], arr[2] = b, c가 스왑
//   s=2, r=2 : ['a', 'c', 'b']
//   s=1, r=2, i=2 : ['a', 'b', 'c'] //...원래대로(?)
//   ...
//   s=0, r=2, i=1 : ['b', 'a', 'c'] // arr[s], arr[i] 스왑(a, b스왑)
//   ...
//   s=0, r=2, i=2 : ['c', ... ]
//   */
// }

// permutation(input, 0, 2); // 0:시작 2:뽑을 개수
// console.log(count);
// /*output
// a b c
// a c b
// b c a
// c b a
// c a b
// 6
// */

// function solution(s) {
//   let result = [];

//   for (let i = 0; i < 10; i++) {
//     result[i] = 0;
//   }

//   let arr = s.split("");

//   for (i = 0; i < arr.length; i++) {
//     result[arr[i]]++;
//   }

//   max = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (result[i] > max) {
//       max = result[i];
//     }
//   }

//   for (i = 0; i < arr.length; i++) {
//     if (max == result[i]) {
//       return i;
//     }
//   }
// }

// let input = [
//   // TC: 1
//   "0000123",

//   // TC: 2
//   "111111000",

//   // TC: 3
//   "333044440",
// ];

// for (let i = 0; i < input.length; i++) {
//   process.stdout.write(`#${i + 1} `);
//   console.log(solution(input[i]));
// }

// function solution(orders, n) {
//   let result = 0;
//   for (let i = 0; i < orders.length; i++) {
//     if (orders[i] < n && orders[i + 1] > n) {
//       console.log(i);
//       result += orders[i + 1] + n + (orders[i] - n);
//     }
//   }
//   return result;
// }

// let input = [
//   // TC: 1
//   "abba",

//   // TC: 2
//   "accaaaaaaabccbbbcabc",

//   // TC: 3
//   "abbac",
// ];

// for (let i = 0; i < input.length; i++) {
//   process.stdout.write(`#${i + 1} `);
//   console.log(solution([1, 3, 5, 7, 9], 5));
// }

// function solution(s) {

//   let s1 = s.split(".");
//   let s2 = s1.join().split(",");
//   console.log(s2)
//   let s3 = s2.join().split("!");
//   console.log(s3)
//   let s4 = s3.join().split("?");
//   let s5 = s4.join().split(" ");
//   return s5

//   }

function solution(points) {
  //세점 A(a,d), B(b,e), C(c,f)가 존재할때,
  //AB의 길이 = ( (a-b)^2 + (d-e)^2 )^1/2
  //H = 삼각형의 높이(AB와 C의 수직으로 만나는) = ( (a-b)(d-f) + (c-a)(d-e) ) / ( (a-b)^2 + (d-e)^2 ) )^1/2
  //AB의 길이 * H를 하면 소거에 의해, H의 분자만 남게 되어 ( (ae+bf+cd) - (db + ec + fa) )가 된다.
  //이는 이 문제의 정답과 일치한다.
  const x1 = points[0];
  const y1 = points[1];
  const x2 = points[2];
  const y2 = points[3];
  const x3 = points[4];
  const y3 = points[5];

  s1 = x1 * y2 - x1 * y3;
  s2 = x2 * y3 - x2 * y1;
  s3 = x3 * y1 - x3 * y2;

  return Math.abs(s1 + s2 + s3);
}

console.log(solution([1, 1, 2, 5, 3, 4]));
