# WEB_ToDo
Node.js + Express.js 기반 서버사이드 방식 웹

# 프로젝트 구조
<img alt="프로젝트 구조" src="https://velog.velcdn.com/images/dzpro0327/post/b68acb53-250d-4695-a31e-c815ac8ce75a/image.png">

- MVC 패턴과 유사하게 프로젝트 구조 설정
- SSR 방식
- Form, Ajax, Axios를 이용한 데이터 전송

# 적용 라이브러리
## 서버
- Express.js
- ejs (템플릿 엔진)
- Passport
- Bcrypt
- dotenv
- multer, multerS3
- mysql2
- cors
- body-parser
- nodemon

## 클라이언트
- Jquery
- Bootstrap
- axios

# 기능 구현
<details>
<summary>회원가입</summary>
<div markdown="1">
<img alt="회원가입" src="https://velog.velcdn.com/images/dzpro0327/post/e14b8e94-eb93-4f15-94cf-c287e832c5cf/image.gif">
</div>
</details>

<details>
<summary>로그인</summary>
<div markdown="1">
<img alt="로그인" src="https://velog.velcdn.com/images/dzpro0327/post/916f9e6b-5ba9-4d0c-a906-c4193b0ec5f8/image.gif">
</div>
</details>

<details>
<summary>로그아웃</summary>
<div markdown="1">
<img alt="로그아웃" src="https://velog.velcdn.com/images/dzpro0327/post/5c964fe6-af12-4578-b050-eaf6784d24ec/image.gif">
</div>
</details>

<details>
<summary>마이페이지</summary>
<div markdown="1">
<img alt="마이페이지" src="https://velog.velcdn.com/images/dzpro0327/post/65c26fb3-0e07-431f-997d-246d1693072e/image.gif">
</div>
</details>

<details>
<summary>게시판 전체조회(페이징 처리)</summary>
<div markdown="1">
<img alt="게시판 조회(전체)" src="https://velog.velcdn.com/images/dzpro0327/post/6777db32-2363-481a-9af3-0895bc0dc6e4/image.gif">
</div>
</details>

<details>
<summary>게시판 상세조회</summary>
<div markdown="1">
<img alt="게시판 상세조회" src="https://velog.velcdn.com/images/dzpro0327/post/0ba7dd45-e00e-4549-8c83-720e751ade76/image.gif">
</div>
</details>

<details>
<summary>게시판 수정(사진수정이 없는 경우)</summary>
<div markdown="1">
<img alt="게시판 수정(사진수정이 없는 경우)" src="https://velog.velcdn.com/images/dzpro0327/post/2a7f489d-1353-4157-b743-7c34ee89cb39/image.gif">
</div>
</details>

<details>
<summary>게시판 수정(사진수정이 있는 경우)</summary>
<div markdown="1">
<img alt="게시판 수정(사진수정이 있는 경우)" src="https://velog.velcdn.com/images/dzpro0327/post/3d5f1a8d-edcd-4823-a9bd-848861bf3dc7/image.gif">
</div>
  
</details>
<details>
<summary>게시판 삭제</summary>
<div markdown="1">
<img alt="게시판 삭제" src="https://velog.velcdn.com/images/dzpro0327/post/ec85629e-305c-4cf0-b38f-aaa57042cdfd/image.gif">
</div>
</details>

<details>
<summary>작성자가 다른경우 수정 삭제 불가능</summary>
<div markdown="1">
<img alt="작성자가 다른경우 수정 삭제 불가능" src="https://velog.velcdn.com/images/dzpro0327/post/a1ee842d-ec59-4b59-83ba-fe0d89000875/image.gif">
</div>
</details>

<details>
<summary>작성자가 같은경우 수정 삭제 가능</summary>
<div markdown="1">
<img alt="작성자가 같은경우 수정 삭제 가능" src="https://velog.velcdn.com/images/dzpro0327/post/0bd791f5-b1c4-436b-924f-5c998a2d44e1/image.gif">
</div>
</details>

<details>
<summary>댓글 작성</summary>
<div markdown="1">
<img alt="댓글 작성" src="https://velog.velcdn.com/images/dzpro0327/post/5407b9eb-a79f-4877-8ac4-874f8c0c0956/image.gif">
</div>
</details>

<details>
<summary>댓글 수정</summary>
<div markdown="1">
<img alt="댓글 수정" src="https://velog.velcdn.com/images/dzpro0327/post/8cfd4c62-bdfc-44be-9c2a-935e5c20526c/image.gif">
</div>
</details>

<details>
<summary>댓글 삭제</summary>
<div markdown="1">
<img alt="댓글 삭제" src="https://velog.velcdn.com/images/dzpro0327/post/f6e1a13c-e932-43f0-b422-42a0d78bf7e8/image.gif">
</div>
</details>

<details>
<summary>ToDo 작성</summary>
<div markdown="1">
<img alt="ToDo 작성" src="https://velog.velcdn.com/images/dzpro0327/post/051e99f0-4551-4f7d-b8af-ba62c2588e6e/image.gif">
</div>
</details>

<details>
<summary>ToDo 날짜 유효성 체크</summary>
<div markdown="1">
<img alt="ToDo 날짜 유효성 체크" src="https://velog.velcdn.com/images/dzpro0327/post/d9141f72-2a9f-4aa5-b8d7-a251dba021c2/image.gif">
</div>
</details>

<details>
<summary>ToDo 수정</summary>
<div markdown="1">
<img alt="ToDo 수정" src="https://velog.velcdn.com/images/dzpro0327/post/27eac0c1-8772-454f-8c86-8c4c09d90826/image.gif">
</div>
</details>

<details>
<summary>ToDo 완료</summary>
<div markdown="1">
<img alt="ToDo 완료" src="https://velog.velcdn.com/images/dzpro0327/post/55ac5167-4189-4210-b1e4-341dfe694734/image.gif">
</div>
</details>

<details>
<summary>기상특보</summary>
<div markdown="1">
<img alt="기상특보" src="https://velog.velcdn.com/images/dzpro0327/post/163a55b9-c73e-4738-96ed-3a873581ab65/image.gif">
</div>
</details>


# ERD
<img alt="ERD 이미지" src="https://velog.velcdn.com/images/dzpro0327/post/6e3922ab-1246-4b85-928b-2d634b086a80/image.png">

- Member 테이블은 Board, Comment, Todo 테이블의 관계를 1:N관계를 설정(유저는 여러 게시판글과 댓글 Todo를 작성가능, 작성자 조회 가능)
- Board 테이블은 Commnet 테이블과 1:N관계를 설정(하나의 게시글에 여러 댓글 작성가능)
- Board 테이블은 Board_img 테이블과 1:N관계를 설정(하나의 게시글에 이미지 업로드 가능 --> 차후 여러 이미지를 등록하기 위해 설정)
- Board_img 테이블에 저장되는 img_url 필드는 S3 경로로 설정가능, 로컬 Path 경로설정 가능(필요에 따라 Multer 갈아끼우기 가능)


# 회고

- ### Express 후기
  - 정해진 구조가 따로 없었다. 그렇기 때문에 MVC 패턴을 적용하려고 노력했다.
  - JS는 다이나믹 타입을 지원하기 때문에 심심치 않게 버그가 발생했고 생각보다 버그 찾는게 어려웠다.
  - 미들웨어를 통해서 로그인 유무체크가 가능했고 생각보다 유용한 기능(라이브러리 적용)이 많았다.
  - 템플릿 엔진(EJS)을 렌더링하는 방식에 응답과 JSON형식으로 응답 주는 방식을 섞어 사용했다.
  - ORM(Sequlize) 를 사용하지 않고 단순 쿼리를 이용해서 DB 데이터에 접근하는 방식을 사용 --> 콜백함수를 다루는게 생각보다 번거로움
  - 쉬워 보이지만 정해진 것이 없어 생각보다 어렵다...

- ### AJAX, AXIOS
  - AJAX는 유용하지만 다음에 프로젝트를 고도화 하거나 새롭게 만들때는 AXIOS를 사용하는 것이 좋다. (특히 form 데이터 전송시 좋다.)

- ### AWS
  - Elastic Beanstalk으로 배포는 처음 해봤는데 기존에 EC2에 배포하고 따로 RDS를 열고 Domain 붙이고 귀찮은 과정이 없어서 좋았다.

- ### 마무리
  이번에 Node기반에 서버를 만들면서 정해진 타입이 없는 데이터를 주고받는 경우 쉬워보이지만 생각보다 어려웠고 타입을 지정해서 사용하는 것이 정말 중요하다는 것을 알게되었다.
  그리고 Spring MVC 패턴처럼 구조가 정해져있는 것이 편하다는 것도 깨달았다. 구조가 유연하면 자유롭지만.. 자유로운것이 생각보다 좋지는 않았다. 내가 구조를 정하고 만드는 과정에서 시간도 많이 걸리고 생각할 것이 많기 때문이다.
  늘 프로젝트를 만들면서 생각하는 거지만 프론트 부분(화면)을 만들때 정말 고통스럽다. HTML,CSS를 연습 해두어야 겠다.
  그리고 다음으로 해볼 것은 프로젝트를 고도화 해보는 것인데 서버는 타입 스크립트 기반 Express를 사용할 생각이고 EJS를 렌더링 하는 방식이 아닌 REST API방식으로 서버를 만들어볼 생각이다.(기존 Spring에서 해본 것 처럼)
  프론트 부분도 공부하고 연습해서 화면도 이쁘고 AXIOS를 이용한 통신을 해볼생각이다.. 🙂

- # 🚨 작성일 기준 AWS 아이디에 이슈가 생겨 배포를 중단했다.
  
