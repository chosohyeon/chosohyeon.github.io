const portfolioData = [
    {
        id: 1,
        title: "엘릭시르",
        font: ["Nanum Myeongjo ", "Noto Sans Korean"],
        info: "본래의 디자인을 최대한 살리면서도 아이템을 효과적으로 노출시킬 수 있도록 웹을 구성하였습니다. 클라이언트에서 서버로의 Request와 Response를 통해 데이터를 주고받을 수 있으며, 백엔드와의 협업을 가정하여 설계하였습니다. 따라서 실제 사용 시 필요한 제어를 이루기 위해 유효성검사 및 권한에 따른 조작설계를 반영하였습니다.",
        skill: ["React", "React-Router-Dom", "Axios", "Scss ", "Java Script"],
        src: process.env.PUBLIC_URL + "/favicon.png",
        link: "https://www.chosohyeon.com/",
        anchor: "pf01",
        img: "thumbnail01.png",
        git: "https://github.com/Hyeonkkyu/elixir_web"
    },
    {
        id: 2,
        title: "조구만 스튜디오",
        font: ["Montserrat ", "Nanum Gothic"],
        info: "커다란 이미지들과 어울리는 여백을 통해 심플하고 직관적인 웹을 을 구성하였습니다. 웹페이지는 다양한 이벤트를 통해 움직임이 제어되고 있으며, 이를 통한 이미지들의 스위치 및 슬라이더 이동이 가능합니다. 학습 초기의 작업물이자 베이직한 프로젝트로서 CSS와 JS를 통해 할 수 있는 화면제어작업의 범위를 늘리기 위해 노력하였습니다.",
        skill: ["Html", "Css", "Java Script"],
        src: process.env.PUBLIC_URL + "/favicon.png",
        link: "https://chosohyeon.github.io/portfolio/pf002/jogumanstudio.html",
        anchor: "pf02",
        img: "thumbnail02.png",
        git: "https://github.com/chosohyeon/portfolio/tree/main/pf002"
    },
    {
        id: 3,
        title: "디오디너리",
        font: ["Noto Sans Korean"],
        info: "많은 정보를 보여주더라도 모던함을 느낄 수 있는 쇼핑몰을 목표로 하여 웹을 구성하였습니다. 기존 홈페이지에서 큰 틀에서의 변경사항을 적용하여 기업의 이미지를 더욱 깔끔하게 표현할 수 있도록 노력하였습니다. 기존 페이지를 리빌드하는 작업을 통해 화면구성에 대한 높은 곳에서의 조감도를 그려볼 수 있었습니다.",
        skill: ["Html", "Css", "Java Script"],
        src: process.env.PUBLIC_URL + "/favicon.png",
        link: "https://chosohyeon.github.io/portfolio/pf003/theordinary.html",
        anchor: "pf03",
        img: "thumbnail03.png",
        git: "https://github.com/chosohyeon/portfolio/tree/main/pf003"
    },
    {
        id: 4,
        title: "궁디팡팡 캣페스타",
        font: ["Nanum Gothic"],
        info: "귀엽고 아기자기한 홈페이지의 특성을 그대로 살려 웹을 구성하였습니다. 초기 학습물로 클론코딩을 진행하며 크로미움 기반 웹브라우저의 개발자도구의 기능을 이해하고 능숙하게 다루는 것을 목표로 하였으며, 이 과정에서 많은 웹페이지들의 구성을 보고 익혔습니다. 정답은 없지만 니즈를 맞출 수 있는 웹이 무엇인지 고민하였습니다.",
        skill: ["Html", "Css", "Java Script"],
        src: process.env.PUBLIC_URL + "/favicon.png",
        link: "https://chosohyeon.github.io/portfolio/pf004/gungpangcat.html",
        anchor: "pf04",
        img: "thumbnail04.png",
        git: "https://github.com/chosohyeon/portfolio/tree/main/pf004"
    }
]

export { portfolioData };

const profile = {
    name: "chosohyeon",
    email: "sohyeon0723@naver.com",
    tel: "010-6503-6521",
    git01:"https://github.com/chosohyeon/",
    git02:"https://github.com/Hyeonkkyu/",
    lang: ["HTML5", "CSS3", "JavaScript", "Java"],
    libframe: ["React", "NodeJs"],
    tool: ["IntelliJ", "VsCode"],
    graphic: ["PhotoShop", "Figma"],
    others: ["AfterEffects", "3DVista"]
}

export { profile };
