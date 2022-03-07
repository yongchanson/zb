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

- 조금 햇갈렸음

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
//new Set(arr) : 중복값 제거
//Araay.from(값) : `new Set(arr)`의 값을 `new_arr` 배열로 반환(얕은복사, 새로운복사)
function answer(arr) {
  let new_arr = [];

  new_arr = Array.from(new Set(arr)); //new Set(arr) : [ 'a', 'b', 'c' ]

  return new_arr;
}
```

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

- max를 0으로 초기화하면(`max=0;`) 음수만 있을경우 0이 리턴되기 때문에 arr[0] or Number.MIN_SAFE_INTEGER(음수의 최소값)으로 초기화해야함

59. 스팸메일

- includes("key") : key가 있으면 true : false

60. 배열회전

- for문에서 키포 : `i < user.length / 2`
- 대칭만드는법 : `user[i] = user[user.length - 1 - i]`

61. 문자교정

- 한번에 못품(이해는 잘 됨)
