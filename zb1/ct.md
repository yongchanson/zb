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

19. 반복문 While
