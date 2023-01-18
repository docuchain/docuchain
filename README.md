# 👇프로젝트 명 : 다큐체인 모니터링 뷰어
<br />

## 📌 프로젝트 설명

SeSAC (청년취업사관학교) 에서 진행 된 기업연계 프로젝트 (주)디지털존의 블록체인 프로젝트인 docuchain의 관리자 페이지 구현



- 블록체인 실시간 데이터를 제공 <br>

- 관리자 권한여부에 따라서 접근 설정

- 차트 라이브러리를 이용한 시각화


<br />

## 👩‍💻 팀명 & 팀원 소개 👨‍💻

- 팀명 : 천기블록체인

- 팀원 : 옥주희, 문승현, 김원석, 이가은, 박용재, 강신우

## 🔗 배포 링크 / 프로젝트 결과물

<br>

📌 링크 :

#### ✨ 메인 페이지

![메인페이지](https://user-images.githubusercontent.com/65056196/213112683-6f345bb4-3299-4b3f-9565-207919cdaef5.gif)

#### ✨ 다크 모드 구현

![다크모드_라이트_모드_AdobeExpress](https://user-images.githubusercontent.com/65056196/213110790-ad3cd547-ecdc-45d8-b314-7fc3d536e0ab.gif)

- 개발기간 : 2022년 12월 19일 ~ 2023년 01월 19일

<br>
## 📌 구현 기능
- JSX 태그 이용하여 웹페이지 구성
- ReCharts를 활용하여 분석 및 차트를 구현
- MUI 테이블을 활용하여 표를 구현
- Scss를 이용하여 전체적인 스타일을 작업
- onClick, onChange 등 이벤트 핸들링 작업
- props를 이용한 컴포넌트 간 데이터 전달
- firebase를 활용한 로그인 기능 구현
- React-router를 이용한 라우팅 사용하여 페이지 이동 구현
- Firebase에 임의데이터 저장 후 활용 실시간 데이터 출력
- 관리자 권한 여부에 따른 접근 설정 구현

<br>

## 📑 초안 / 프로젝트 레이아웃

💡 Menu Structure ( 메뉴구조 )

![Group 84 (2)](https://user-images.githubusercontent.com/47172522/212784521-92486105-86b2-4d1b-acee-88eccb3025e0.jpg)

💡 Flowchart ( 플로우차트 ) / 대시보드, 블록, 트랜잭션

![Group 85](https://user-images.githubusercontent.com/47172522/212784787-b66d87c3-afb9-42f0-b9c7-9e24b593a438.jpg)

💡 Flowchart ( 플로우차트 ) / 노드, 서비스, 사용자정보

![Group 88](https://user-images.githubusercontent.com/47172522/212784984-51a556fd-db29-4f57-935a-b1a3dc992f3f.jpg)

<br>

## 📁 폴더 구조

🗃 Project Folder

```bash
📁docuchain
├── 📁vscode
├── 📁node_modules
├── 📁public
└── 📁src
    ├── 📁apis
    ├── 📁lib
    ├── 📁pages
    │    ├── 📁asset
    │    ├── 📁block
    │    │     ├── 📁components
    │    │     ├── 📁style
    │    │     └── 📁utils
    │    ├── 📁common
    │    │     ├── 📁components
    │    │     ├── 📁style
    │    │     └── 📁utils
    │    ├── 📁dashboard
    │    │     ├── 📁dist
    │    │     └── 📁utils
    │    ├── 📁myinfo
    │    │     ├── 📁components
    │    │     └── 📁utils
    │    ├── 📁node
    │    │     ├── 📁components
    │    │     └── 📁utils
    │    ├── 📁service
    │    │     ├── 📁components
    │    │     ├── 📁style
    │    │     └── 📁utils
    │    ├── 📁trans
    │    │     ├── 📁components
    │    │     ├── 📁style
    │    │     └── 📁utils
    │    └──📁usermanaging
    │          ├── 📁components
    │          └── 📁utils
    ├── 📁recoil
    └── 📁routes


.docu.json
.package-lock.json
.package.json
.yarn.lock
.gitignore
.env.local
```

<br>

## 🛠 사용 기술

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-black.svg?style=for-the-badge&logo=Recoil&logoColor=white)

![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

<br />

## ⚙ 기술 스택

- 프론트 : HTML,SCSS,React, react-hook-form
- 백엔드 : Firebase
- 상태관리 : Recoil
- 배포 : vercel
- 협업관리 : Notion, github
- 툴 : Adobe Photoshop, Adobe Illustrator, Figma,
<hr />
