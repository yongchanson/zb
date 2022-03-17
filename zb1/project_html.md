### 핵심 CSS

4-3. 가상 클래스 선택자

- focus-visible : 선택(activer) 후 focus상태가 아니도록 하는 속성 / ex) 마우스 클릭시 active->hover 상태가 됨) `button: focus-visible {}`

- not(:속성) : 특정 속성일때는 작동x `button:not(:disabled):hover{}`

4-4. 가상 요소 선택자

- `li{ &:nth-child(3) ~ li {} }` : 3번째 child 이후 li에 속성추가

- input의 placeholder에 옵션 적용 : `input{ &::placeholder {color:red} }`
