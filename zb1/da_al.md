# JavaScript 기초 문법

7. 변수와 상수

- 호이스팅 : 선언된 변수(함수)를 유효한 범위의 코드상단으로 올리는 작업
- var : 호이스팅o / 선언만 위로 올려짐, 할당(값)은 올려X
- let/const : 호이스팅x

10. 객체 복사 문제점

- 깊은복사 : let admin_json = JSON.parse(JSON.stringify(user));

11. 형변환

- console.log(Number(undefined)) : NaN
- console.log(Boolean(NaN)) : false
- console.log(Boolean(undefined)) : false

18. 반복문

(1) `for(key in object) {}` : key, value 형태 반복하는 경우

```javascript
const person = { name: "yong", age: 15 };
let info = "";
for (let x in person) {
  //x는 name, age
  info += person[x];
}
console.log(info); // yong15
```

(2) `for(variable of iterable)` : 반복가능한 객체를 정의하기 위한 심볼

> variable : 변하기 쉬운
> iterable : 반복가능한

```javascript
fot (let x of abcd){
  text += x;
  console.log(x); // a \n b \n c \n d \n
}
```

```javascript
function answer(str) {
  let fix_str = "";

  for (let item of str.split(" ")) {
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  }

  return fix_str;
}
```

23. 재귀함수

![재귀함수](https://user-images.githubusercontent.com/84462830/156611437-eb309ae9-41df-477f-a65e-e50c06c18a2f.png)

24. method

- method : 객체에 저장된 값이 함수인 경우

29. 문자열 변환

- 위치기반 문자열 추출 : String.slice(start, end)
- 길이기반 문자열 추출 : String.substr(start, length)

32. 배열탐색 - 변형

- 배열->문자열 : arr.join(), arr.join(";")
- 문자열->배열 : arr.split()

33. 고차함수

return 1 : 자리바꿈 / return -1 : 위치 그대로
![고차함수](https://user-images.githubusercontent.com/84462830/156870893-3cb5c5e7-0409-42ef-8bd3-5ac4ab7a0947.png)

35. 생성자

- new가 있어야 생성가능 / 없는경우 우측과 같이 조건추가
  ![생성자](https://user-images.githubusercontent.com/84462830/156873581-07fd23c6-2579-48cc-b300-cc9bae87f1c1.png)

36. Set

- Set : value만 저장, 중복허용x

39. Math

- 배열을 인수로 받기 위해선 apply or 스프레드문법 필요
  ![math](https://user-images.githubusercontent.com/84462830/156882132-f32bca9e-b2b6-4e01-92d4-e4550c8816a4.png)

40. Date

- 20:26~ : replay

44. 두 수 사이의 숫자

```javascript
if (x > y) {
  let t = x;
  x = y;
  y = t;
}
or;
if (x > y) {
  [x, y] = [y, x];
}
```

47. 무한뺄셈

```javascript
function answer(s, e) {
  let seq = [];
  seq.push(s);
  seq.push(e);

  let dif;
  while (true) {
    dif = s - e;
    s = e;
    e = dif;

    if (e < 0) break;

    seq.push(e);
  }
}
```

56. 요일구하기

```javascript
//중요한건 str
function answer(str) {
  let week = new Array("일", "월", "화", "수", "목", "금", "토");
  let day;

  let date = new Date(str);
  day = week[date.getDay()]; //week[0~6]을 반환

  return day;
}
```

57. 중복 단어 제거

```javascript
//forEach활용
function answer(arr) {
  let new_arr = [];

  new Set(arr).forEach(function (item) {
    new_arr.push(item);
  });

  return new_arr;
}
```

58. 배열 내 최댓값

- max를 0으로 초기화하면(`max=0;`) 음수만 있을경우 0이 리턴되기 때문에 arr[0] : 테스트케이스의 첫번째 배열 or Number.MIN_SAFE_INTEGER(음수의 최소값)으로 초기화해야함

59. 스팸메일

- includes("key") : key가 있으면 true : false

60. 배열회전

```javascript
//for문 전체경유하는 풀이
for (let i = input.length - 1; i >= 0; i--) {
  result.push(input[i]);
}
```

61. 문자교정

>

### 수학 기본이론

4. <u>순열</u>

- 순서에 상관있게 나열 nPr

![순열4중포문](https://user-images.githubusercontent.com/84462830/158531433-e02db89b-439d-489c-9229-5ce43c0c7fef.png)

```javascript
//재귀함수를 이용한 풀이
let input = ["a", "b", "c"];
let count = 0;

function permutation(arr, s, r) {
  //s=시작, r=뽑을 개수
  // 1.재귀함수를 멈춰야할 조건
  console.log(`s:${s}`);
  if (s == r) {
    count++;
    console.log(arr.join(" ")); // join의 역할 : ['a', 'b'] -> ab
    return;
  }
  // 2. 재귀를 돌면서 변경되어야 할 부분(메인로직)
  for (let i = s; i < arr.length; i++) {
    console.log(`for1> i:${i}, s:${s}, ${arr}`);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 스왑
    console.log(`for2> i:${i}, s:${s}, ${arr}`);
    permutation(arr, s + 1, r);
    console.log(`for3> i:${i}, s:${s}, ${arr}`);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복구(?)
    console.log(`for4> i:${i}, s:${s}, ${arr}`);
  }
}

permutation(input, 0, 2); // 0:시작 2:뽑을 개수
console.log(count);
```

5. <u>조합</u>

![조합2중for](https://user-images.githubusercontent.com/84462830/158579957-58434df5-8883-46e5-bb40-9e3bf6a9e668.png)

![조합](https://user-images.githubusercontent.com/84462830/157258848-f4ba9965-6406-43f9-be80-a315e422f721.png)

6. 점화식

```javascript
//등차수열
let result;

function recursive(s, t, num) {
  in (num == 1) { //num==1이면 종료
    return s;
  }
  return recursive(s, t, num-1) + t;
}
/*
아래부터 읽음
num:5 rec(s, t, 4) + 2  //9+2
num:4 rec(s, t, 3) + 2  //7+2
num:3 rec(s, t, 2) + 2  //5+2
num:2 rec(s, t, 1) + 2  //3+2
num:1 => 3반환
*/

result = recursive(3, 2, 5); // 초기값:3, 등차:2, 반복횟수:5
console.log(result); //11
```

```javascript
//피보나치 수열
if (num == 1 || num == 0) {
  //멈추는 조건
  return num;
}
```

8. 잃어버린 카드 찾기

```javascript
//내 풀이
function answer(a, b, c) {
  let number = 0;

  num = [a, b, c];

  x = b - a;
  y = c - b;

  if (x < y) {
    number += b + x;
  } else {
    number += a + y;
  }

  return number;
}
```

```javascript
//해답 : sum(각항의차이) / arr.length = 등차(d)
function answer(a, b, c) {
  let number = 0;

  // sort
  num = [a, b, c];
  num.sort((x, y) => x - y);

  // 1. 등차값 찾기
  let d = 0;
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;

  // 2. 빈index 찾기
  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

  // 3. 값 구하기
  number = num[0] + d * index;

  return number;
}

let input = [
  // TC: 1
  [1, 7, 10],

  // TC: 2
  [3, 8, 18],

  // TC: 3
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
```

### 선형 자료구조

3. 최솟값 위치

>

4. 체스세트

```javascript
//내 풀이
p = [1, 1, 2, 2, 2, 8];

for (i = 0; i < chess.length; i++) {
  result[i] = p[i] - chess[i];
}
```

```javascript
//해답
let count = 0;
for (let i = 0; i < chess.length; i++) {
  p[count++] = p[i] - chess[i];
}
```

5. 두 수 최대합

```javascript
//풀이
function answer(nums) {
  let result = [];

  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]]; //0,1번째 요소를 세팅하고 시작함
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > result[0]) {
      result[1] = result[0];
      result[0] = nums[i];
    } else if (nums[i] > result[1]) {
      result[1] = nums[i];
    }
  }

  return result;
}
```

6. 일곱 난장이

```javascript
//풀이
function answer(dwarf) {
  let result = [];

  let sum = 0;
  for (let i = 0; i < dwarf.length; i++) {
    sum += dwarf[i];
  }
  sum -= 100; // -> 가짜난장이2명의 합

  // 2. for 두 요소의 합이 faker 2명에 대한 합 숫자과 같은지 비교 -> i, j
  let faker = [];
  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (sum == dwarf[i] + dwarf[j]) {
        faker[0] = i;
        faker[1] = j;
        break; //break를 만나면, for (let j..만 반환
      }
    }

    if (faker.length != 0) break; //...답을 찾으면 for (let i..로 보냄 / 0인경우 답을 못 찾음 / break2개대신 라벨을 사용해도 괜찮
  }

  // 3. faker 두명을 제외하고 나머지 배지값을 result에 넣어준다
  let count = 0;
  for (let i = 0; i < dwarf.length; i++) {
    if (faker[0] != i && faker[1] != i) {
      result[count++] = dwarf[i];
    }
  }

  return result;
}
```

7. 나무그리기

>

8. 투썸

```javascript
//내풀이(2중for문)
function answer(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return []; //만약 문제있으면 빈배열 출력
}
```

```javascript
//해답(1중for문)
function answer(nums, target) {
  let map = {}; // key, value

  // target - nums[i] = nums[j]
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != undefined) {
      //map[2x]라는 키가 존재한다면
      return [map[target - nums[i]], i];
    }

    map[nums[i]] = i;
  }
  /*
  map = { '2': 0 }
  map[2] != undefinde 조건만족
  return [ [map[2]의 값(0), 본인인덱스(1)] ]
  */
  return [];
}
```

9. OX퀴즈

>

10. 벽돌 옮기기

```javascript
//내풀이(해답과 로직같음)
function answer(blocks) {
  let result = 0;
  let avg = 0;

  blocks.forEach(function (item) {
    avg += item;
  });

  avg /= blocks.length;

  blocks.forEach(function (item) {
    if (item > avg) {
      result += item - avg;
    }
  });

  return result;
}
```

11. 숫자 빈도수 구하기

```javascript
//해답
function answer(s, e) {
  let result = [];

  for (let i = 0; i < 10; i++) {
    result[i] = 0; //result = [0, 0, ..., 0] : length 10개
  }

  let num;
  for (let i = s; i <= e; i++) {
    num = i;

    while (num != 0) {
      //소수가 되기 전까지 반복
      result[num % 10]++;
      num /= 10;
      num = parseInt(num); //소수점제거
    }
  }

  return result;
}
```

12. <u>달팽이 만들기</u>

>

14~. 연결리스트(folder : 선형자료구조\_21~24이중연결리스트)

- 각노드가 데이터, 포인트를 가지며 / 한줄로 연결되어 있는 방식으로 / 데이터를 저장하는 자료구조

- 16연결리스트(2)

- 17연결리스트(3) : append(뒤에 추가)

- 18연결리스트(4) : insert(앞에 추가)

- 19연결리스트(5) : removeAt(인덱스를 이용한 삭제)

- 20연결리스트(6) : indexOf + removeAt = remove

21. 이중 연결리스트

![이중연결리스트](https://user-images.githubusercontent.com/84462830/158052409-abfaf6dc-f8c3-41f4-9d79-ac3207bddf6e.png)

22~. 이중 연결리스트

```javascript
node = new Node(456);
dll.tail.next = node; //tail.next에 node(456) 만듦
node.prev = dll.tail; //node(456)의 prev -> dll.tail을 연결
dll.tail = node; //dll.tail -> node 연결
dll.length++;
console.log(dll);
```

26. 원형 연결리스트

- node.next = this.head;

29. 문제 : 열차연결

>

30. 문제 : 서류정리

>

31. 문제 : 대표선출

>

32. 스택

- Stack.peek() : 마지막 데이터 조회

34. 문제 : 기차운행

```javascript
//prototype 사용x
function answer(train) {
  let stack = [];
  let num = 0;

  for (let i = 0; i < train.length; i++) {
    //순서 : while돌고 false이면 -> if
    while (stack.length == 0 || stack[stack.length - 1] < train[i]) {
      //[3,2,1] 인경우 stack가장오른쪽값<3
      stack.push(++num);
    }

    if (stack[stack.length - 1] == train[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return true;
}
```

35. 문제 : 괄호 짝찾기

>

36. 문제 : 접시 꺼내기

> c

37. 기린의 시야

>

38. 괄호 계산

>

39. 큐

- 데이터 추가/삭제(앞에서부터) : Queue.enqueue() : 공간도 늘어남/ dequeue() : 공간유지
- 1st데이터 : Queue.front()

Max. 스택 vs 큐

(1) 스택(LIFO, 후입선출)

- 가장 마지막에 삽입된 자료가 가장 먼저 삭제
- 정해진 곳(top : 가장 위)에서 추가, 삭제가 이루어짐(==정해진 방향으로만)

(2) 큐(FIFO, 선입선출)

- 삭제는 먼저 들어온것부터(선착순)
- 한쪽끝에서는 추가만, 다른 한쪽 끝에서는 삭제만 가능(동시가능)

### 비선형 구조

9, 11. 데크

- 삽입/삭제가 양쪽끝에서 모두 발생할 수 있는
- 앞에서 추가/삭제 : `arr.pushFront()` `arr.pushBark()`

13. 문제 : 큐 만들기

>

14. 문제 : 카드 뽑기

>

15. 문제 : 프린트 출력

>

16. 문제 : 대표 선출

>

17. 문제 : 데크 만들기

- 13번과 거의 일치

18. 딕셔너리
