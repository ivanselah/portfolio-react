// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "hahmsongmin",
  middleName: "",
  lastName: "IvanSelah",
  message:
    " Hello, I'm Developer, Wanna Fullstack; 새로운 분야를 계속 공부하고 도전하는 개발자🔨",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/hahmsongmin",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.png"),
  imageSize: 400,
  message:
    "주변인들과 회사에 도움이 되는 개발자가 되고 싶습니다. 사람들이 사용하기 편하게 만들고 그들이 제가 만드는 서비스를 사랑할 수 있었으면 좋겠습니다. 그리고 코드에 열정을 가지고 동료 개발자가 모르는 게 있으면 알려주고 누군가에게는 멘토가 되고 싶고 창의적인 아이디어를 갖고자 노력하는 개발자가 되고 싶습니다.",
  tags: "#신입 #팀워크중심 #풀스택지향 #코드열정 #창의적인노력 #뛰어난노력파? #점심메뉴잘고름",
};

const repos = {
  show: true,
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 85 },
    { name: "JavaScript", value: 80 },
    { name: "ReactJS", value: 75 },
    { name: "NodeJS", value: 65 },
    { name: "Python", value: 60 },
    { name: "C,C++", value: 65 },
    { name: "DataBase", value: 55 },
  ],
};

// PROJECTS SECTION
const projects = {
  heading: "Projects",
  projects: [
    {
      name: "YourTube",
      message:
        "Youtube의 주요 기능인 인기동영상, 동영상 검색 및 재생 스크롤을 이용한 페이지로드 기능",
      alt: "yourtube",
      imageLink: require("./projects/yourtube.png"),
      git: "https://github.com/hahmsongmin/yourtube",
      deploy: "https://hahmsongmin.github.io/yourtube/",
      languages: "React, PostCSS",
    },
    {
      name: "Logflix",
      message:
        "인기영화, TV프로그램, 검색 및 로그인 후 감상평 남겨 마이페이지에 저장 기능, 현재 로컬 DB 사용 중이므로 배포 전",
      alt: "yourtube",
      imageLink: require("./projects/logflix.png"),
      git: "https://github.com/hahmsongmin/react-movieslog",
      deploy: "https://github.com/hahmsongmin/react-movieslog",
      languages: "React, ExpressJS, MongoDB",
    },
    {
      name: "Portfolio WebSite",
      message: "HTML,CSS,JS 만든 초기 포트폴리오 사이트",
      alt: "PortfolioWebSite",
      imageLink: require("./projects/initialSite.png"),
      git: "https://github.com/hahmsongmin/portfolio",
      deploy: "https://hahmsongmin.github.io/portfolio/",
      languages: "Vanilla JavaScript",
    },
    {
      name: "CatchCarrot-Game",
      message: "웹게임, 제한시간 내 벌레를 피해 당근을 클릭하면 승리",
      alt: "CatchCarrotGame",
      imageLink: require("./projects/catchcarrotgame.png"),
      git: "https://github.com/hahmsongmin/catch-carrot-game",
      deploy: "https://hahmsongmin.github.io/catch-carrot-game/",
      languages: "Vanilla JavaScript",
    },
    {
      name: "TodoList",
      message:
        "로컬스토리지 이용 사용자등록 및 할일 추가 삭제, 날씨API연동 및 랜덤배경화면 출력",
      alt: "TodoList",
      imageLink: require("./projects/todolist.png"),
      git: "https://github.com/hahmsongmin/vanillajs-todo",
      deploy: "https://hahmsongmin.github.io/vanillajs-todo/",
      languages: "Vanilla JavaScript",
    },
    {
      name: "JobSearch",
      message:
        "검색어 입력 및 지역 선택, 여러 채용정보 사이트 크롤링 통합정보 및 엑셀파일로 다운로드 가능, 로컬서버 배포전",
      alt: "JobSearch",
      imageLink: require("./projects/jobsearch.png"),
      git: "https://github.com/hahmsongmin/python_jobserach",
      deploy: "https://github.com/hahmsongmin/python_jobserach",
      languages: "JavaScript, Python, Flask, MySQL",
    },
  ],
};

export { navBar, mainBody, about, repos, skills, projects };
