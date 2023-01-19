# ✨ 프로젝트 명 : 다큐체인 모니터링 뷰어
<br />

## 👉 프로젝트 설명

SeSAC (청년취업사관학교) 에서 진행 된 기업연계 프로젝트 (주)디지털존의 블록체인 프로젝트인 docuchain의 관리자 페이지 구현
<br>
- 블록체인 실시간 데이터를 제공 

- 관리자 권한여부에 따라서 접근 설정

- 차트 라이브러리를 이용한 시각화
<br />

## 👩‍💻 팀명 & 팀원 소개 👨‍💻
- 팀명 : 행복회로(우리는 언제나 최고의 시나리오만을 생각한다.)
- 팀원 : 옥주희, 문승현, 김원석, 이가은, 박용재, 강신우
<br>

## 🔗 배포 링크 / 프로젝트 결과물
- 개발기간 : 2022년 12월 19일 ~ 2023년 01월 19일
<br>

#### ✨ 로그인 기능(권한에 따른 데이터 차등 접근 설정)
![1  로그인 기능](https://user-images.githubusercontent.com/65056196/213118835-9b3514da-293d-4f49-819c-cc66d791d09c.gif)
<br>

#### ✨ 다크 모드 구현
![3 다크모드](https://user-images.githubusercontent.com/65056196/213120791-bc22ae2f-2ce0-43e7-a735-182f3fdf08aa.gif)
<br>
<br>
### 🔗 &nbsp;[👉 프로젝트를 자세히 보고싶다면 클릭하세요!](https://docuchain.vercel.app/)
<br>

## 🛠 구현 기능
- JSX 태그 이용하여 웹페이지 구성<br>
- ReCharts를 활용하여 분석 및 차트를 구현<br>
- MUI 테이블을 활용하여 표를 구현<br>
- Scss를 이용하여 전체적인 스타일을 작업<br>
- onClick, onChange 등 이벤트 핸들링 작업<br>
- props를 이용한 컴포넌트 간 데이터 전달<br>
- firebase를 활용한 로그인 기능 구현<br>
- React-router를 이용한 라우팅 사용하여 페이지 이동 구현<br>
- Firebase에 임의데이터 저장 후 활용 실시간 데이터 출력<br>
- 관리자 권한 여부에 따른 접근 설정 구현<br>
<br>

## 📑 초안 / 프로젝트 레이아웃
🔗 [Figma - docuchain Flow chart 자세히 보기](https://www.figma.com/file/SiCFUx7hU9z6FnP2GyYpW1/%EB%8B%A4%ED%81%90%EC%B2%B4%EC%9D%B8---%EB%94%94%EC%A7%80%ED%84%B81%ED%8C%80(%ED%96%89%EB%B3%B5%ED%9A%8C%EB%A1%9C)%2F-%ED%94%8C%EB%A1%9C%EC%9A%B0-%EC%B1%A0%ED%8A%B8?node-id=0%3A1&t=5GQr59NwagoBwkXk-0)
<br>
<br>
💡 Menu Structure ( 메뉴구조 )<br>
<img src="https://user-images.githubusercontent.com/47172522/212784521-92486105-86b2-4d1b-acee-88eccb3025e0.jpg"  width="60%"/>

💡 Flowchart ( 플로우차트 ) / 대시보드, 블록, 트랜잭션<br>
<img src="https://user-images.githubusercontent.com/47172522/212784787-b66d87c3-afb9-42f0-b9c7-9e24b593a438.jpg"  width="60%"/>

💡 Flowchart ( 플로우차트 ) / 노드, 서비스, 사용자정보<br>
<img src="https://user-images.githubusercontent.com/47172522/212784984-51a556fd-db29-4f57-935a-b1a3dc992f3f.jpg"  width="60%"/>
<br>
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

## ⚙ 기술 스택

- 프론트 : HTML,SCSS,React, react-hook-form
- 백엔드 : Firebase
- 상태관리 : Recoil
- 배포 : vercel
- 협업관리 : Notion, github
- 툴 : Adobe Photoshop, Adobe Illustrator, Figma,
<br>

## 🛠 사용 기술
##### FE
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
<br>
##### Frameworks & Platforms 
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-black.svg?style=for-the-badge&logo=Recoil&logoColor=white)
##### DB & BE
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
<br>
##### cooperataion tools
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
<br>
<br>
<hr />
### 🔗 &nbsp;[👉 프로젝트를 자세히 보고싶다면 클릭하세요!](https://docuchain.vercel.app/)


