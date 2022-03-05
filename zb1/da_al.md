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

```
fot (let x of abcd){
   text += x;
   console.log(x); // a \n b \n c \n d \n
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
