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

- em : 강세, 대조적, 연관인 경우
- 기술용어, 대명사, 외국 구절

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