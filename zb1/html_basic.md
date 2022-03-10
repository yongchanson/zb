# HTML/CSS Basic

### HTML 강의 개요

2. HTML과 웹 브라우저

- 프로그래밍 : 데이터를 가공해서 명령을 내리는 것
- 마크업 : 데이터를 어디에 어떻게 표현할지 기술하는 언어(구조를 나타내는 언어)

4. 웹 표준, 웹 접근성, 웹 호환성

- 웹 표준 : 운영체제, 브라우저마다 의도대로 웹페이지 보여지도록
- 웹 접근성 : 장애가 있는, 제한적인 상황에서 웹사이트 이용가능하도록
- 웹 호환성 : 브라우저 버전, 종류와 관계없이 웹사이트 접근O

### HTML 소개

9. 블록과 인라인

- Block : 가로길이 최대한 차지(길이지정 없을경우), 언제나 새로운 줄에서 시작
- Inline : 요소의 크기만큼 차지, 줄의 어느곳에서나 시작가능
  규칙 : Inline은 Block을 포함할 수 없음(자식이 더 크기 때문)

### 실습환경 세팅

5. VSCode 단축키

- 현재창 닫기 : <kbd>Ctrl</kbd> + <kbd>w</kbd>
- 닫은창 다시열기 : <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>t</kbd>
- 에디터 크기 : <kbd>Ctrl</kbd> + <kbd>+/-</kbd>
- 들여쓰기 : <kbd>Ctrl</kbd> + <kbd>]</kbd>
- 탭 산입 : 아래(<kbd>Ctrl</kbd> + <kbd>Enter</kbd>), 위(<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd>)
- 행 복사 : <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>⬆/⬇</kbd>
- 행 삭제 : <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>k</kbd>

### 텍스트 요소

4. 본문 - blockquote, q : 인용

- blockquote : 새로운 문단에 인용
- q : 문단 안에 인용(""가 추가됨)
  규칙 : p안에 blockquote을 사용하면 p가 닫힌다.

5. 본문 - pre

- 작성한 그대로 출력
- 고정폭 글꼴(가로폭 동일)

6. 본문 - addr, address, cite, bdo

- 마우스 hover 시 내용 출력 `<abbr title="World Wide Web>www</abbr>`

10. 포매팅 - i, em(기울기 효과)

- i : 기술용어, 대명사, 외국 구절
- em : 강세, 대조적, 연관인 경우

14. a태그와 하이퍼링크 2
    `<a href="" target="_blank"> </a>` : 새창으로 열기

15. 엔티티(Entity)
    검색 : w3c entity

### 구조를 나타내는 요소

1. 컨테이너(div, span)
   div(블록) vs span(인라인)

7~8. article, section

- article : main안에 위치, 단독적인 컨텐츠(기사, 블로그 글), 제목이 대부분 있음
- section : 문맥적으로 호흡이 다른 경우

### 목록과 표

4~6. 표

- scope : th에만 가능한 속성 ex) col, row
- caprtion : 테이블의 첫자식이여야함
- thead, tbody tfoot

### 임베디드 요소

> caniuse.com : 브라우저 지원가능여부 확인
> placeholder.com/{150}or{150\*300} : 더미이미지 생성

4~5. 반응형 이미지

- srcset : 브라우저 크기에 따라 <u>다른 </u>이미지 출력(브라우저크기에 정비례)
- sizes : srcset + 이미지크기고정(450~600은 450으로 고정)

```javascript
<img
  src="{이미지경로}"
  srcset="images/small.png 300w,
        images/medium.png 450w,
        images/large.png 600w"
  sizes="(min-width: 600px) 600px,
       (min-width: 450px) 450px,
       300px"
/>
```

6. video

- autoplay : 웹페이지 진입 시 자동실행(muted와 같이 사용해야함)
- poster : 썸네일

### 폼 관련 요소

8, 13. input

- input은 빈요소
- autocomplete="on" : 자동완성
- datalist : 값추천(select와 비슷하지만 값수정 가능), input의 list와 datalist의 id가 연결됨

```javascript
<lable for="movie">영화:</label>
<input type="text" id="movie" list="movielist">
<datalist id="movielist">
  <option></option>
  <option></option>
</datalist>
```

### 선택자

(1) attr^ : 시작하는
(2) attr$ : 끝나는
(3) attr\* : 포함하는
ex) `a[href^="http://"]`

9. 가상클래스 선택자

- 적절한 링크 디자인 : LVHA(link->visited->hover->active)

10. 가상요소(Pseudo-Element) 선택자

- 존재하지 않는 요소를 존재하는 것처럼 부여(텍스트x)
- ::을 사용(:은 일부 브라우저만 지원)

13. 선택자 결합

- 하위 선택 : `#list li`
- 자식 선택(바로 하위만 선택) : `#list > li`

14. 형제 선택자(<u>뒤에 있는 것만</u> 선택), 그룹화

- 일반 형제 선택자 결합(~) : `code ~ p {}`
- 인접 형제 선택자 결합(+) : `code + p {}`

16~17. 상속 제어하기

- 상속된 스타일 무시 : initial `.child1 { all: initial, color: initial }`
- 상속된 스타일을 받음(지정된값 무시하고 기본값) : inherit
- unset : 상속값o -> inherit / 상속값x -> initial

18. 우선순위

- !important `ex) color:blue !important`> id > class/attribute(`ex) href`)/pseudo class(가상요소) > type(tag) > \* > inherited(상속받은것)

### 폰트 관련 속성

2. 배열

- some : 조건을 만족하는 요소가 존재한다 ? true : false (빈배열=false)
- every : 모든요소가 조건을 만족한다 ? true : false (<u>빈배열=true</u>)

3. font

- `.class{ font: font-style font-weight 20px/line-height }` (지정하지 않으면 기본값으로 변경)

6. text-align

- block속성에만 사용가능(확인방법 : background-color 추가), 적용안된다면 가로길이가 짧은지 확인
