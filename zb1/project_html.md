### 핵심 CSS

4-3. 가상 클래스 선택자

- focus-visible : 선택(activer) 후 focus상태가 아니도록 하는 속성 / ex) 마우스 클릭시 active->hover 상태가 됨) `button: focus-visible {}`

- not(:속성) : 특정 속성일때는 작동x `button:not(:disabled):hover{}`

4-4. 가상 요소 선택자

- `li{ &:nth-child(3) ~ li {} }` : 3번째 child 이후 li에 속성추가

- input의 placeholder에 옵션 적용 : `input{ &::placeholder {color:red} }`

### 핵심sass

4. Sass Variables

- 변수선언 : `$h1-color: blue;`
- 변수사용 : `color: $h1-color;`

5. Sass @mixin

```javascript
@mixin overflowHidden {
  overflow:hidden;
}

p {
  @include overflowHidden;
}
```

```javascript
//contain, transparent은 기본값 설정한 것
@mixin bg-img ($bgUrl, $bgSize:contain, $bgColor:transparent) {
  background-image: url($bgUrl);
  background-size: $bgSize;
  background-color: $bgColor;
}

.bg {
  width: 100px;
  @include bg-img('https://abcd.com/img/logo', contain, blue);
}
```

6. Sass @function

```javascript
@function colorOpacity($color, $opacity) {
  $color: rgba($color, $opacity);
  @return $color;
}

h1 {
  color: colorOpacity(green, 0.3);
}
```

### 진입페이지

- 부모요소가 flex일때, 자식에게 `flex:1;'을 주면 1:1:1비율로 배열됨
- 반복적인 요소 사이에 border 삽입

  ```javascript
  .item {
    & + .item {
      border-left : 1px solid red;
    }
  }
  ```

- <u>inline은 top/bottom의 margin, padding 조절불가</u>하기 때문에 `display:inline-block` 속성을 주면 가능

### 메뉴 페이지

1-1. 헤더 영역1

- 요소를 양쪽으로 보냄(중앙에 맞춰서) `display:flex; justify-content: space-between;`

1-2. 헤더 영역2

-
