# life-Calendar
## 개요  
- Life-Calendar는 사용자가 자신의 일상에서 느끼는 행복도를 시각적으로 기록하고 편리하게 관리할 수 있는 웹 기반 달력이다. 이 플랫폼은 사용자가 자신의 감정 변화를 추적하고 장기적으로 개인의 웰빙을 개선하는 데 도움을 줄수 있다.

## 실행방법  
- "<>code"에서 주소를 복사하여 원하는 폴더 경로에 터미널에서 git clone (복사한 주소) 를 입력한다.
- clone했던 경로에 접근하여 index.html를 클릭한다.

## 개발자 규칙  
- 모든 태그명은 소문자로 표기하며 CSS, javascript파일은 html파일과 외부로 연동한다.
- 설계도를 토대로 각각의 인터페이스, UI, 기능을 가능한한 독립적으로 구현한다.
- 다른 사람이 짠 코드를 함부로 수정하지 말아야하며, 필요시 서로 의사소통하여 개선한다.
- 구현시 변수명, 클래스명, 부연 설명을 위한 주석 등 다른 사람이 이해하기 쉽게 개발한다.
- 구현시 구조화된 DOM(HTML의 문서 구조) 트리를 따르며, 문서내 부모와 자식 간의 관계를 명확하게 파악한 후에 개발한다.
- 새로운 기능을 추가하고 싶다면, 구현 전에 문서를 작성하고 팀 내 리뷰와 설계과정을 거친다.
  
## Life-Calendar 설계도 (문서)  
<a href="https://docs.google.com/document/d/1kFv2AlgV6okS5pjSDy7rbzng9SRRdzr2FOT6_B91_5o/edit?usp=sharing" target="_blank">문서 열기</a>

## Life-Calendar 기능
- 사용자의 정보 
- 로그인 로그아웃 기능
- 날짜 표시
- 사용자의 감정 표시
- 사용자의 감정 기록

## Life-Calendar 의 구조
- header : Life-Calendar의 상단에 표시되며 로그인,회원가입 새로고침 등의 기능을 나타낸다. 
- sidebar : Life-Calendar의 좌측에 표시되며 여러기능을 사용자가 원하는대로 설정하는 기능을 나타낸다.
- main : Life-Calendar의 중앙에 표시되며 1년 365개의 타일을 배치하고(4행 3열) 감정을 표시하는 기능을 나타낸다.
- footer : Life-Calendar의 하단에 표시되며 연락처, 이메일 정보, 소셜 미디어 링크 같은 기타 정보를 나타낸다.

## 참고 사이트 
- <a href="https://brunch.co.kr/@830bfa34e0894d6/25">header 영역 디자인 참고사이트</a>

## html color hex code 사이트
- https://www.smartprix.com/bytes/a-complete-guide-to-html-colour-and-html-hex-codes 색깔 code 사이트

