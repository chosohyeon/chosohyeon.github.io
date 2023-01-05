const PD = [
    { id: 1, title: "엘릭시르", type: "STANDARD WEB", font: ["Nanum Myeongjo", "Noto Sans Korean"], info: "본래의 디자인을 최대한 살리면서도 아이템을 효과적으로 노출시킬 수 있도록 웹을 구성하였습니다. 클라이언트에서 서버로의 Request와 Response를 통해 데이터를 주고받을 수 있으며, 백엔드와의 협업을 가정하여 설계하였습니다. 따라서 실제 사용 시 필요한 제어를 이루기 위해 유효성검사 및 권한에 따른 조작설계를 반영하였습니다.", skill: ["REACT", "REACT-ROUTER-DOM", "AXIOS", "SCSS", 'JAVA SCRIPT'], src: process.env.PUBLIC_URL + "/favicon.png", link: "https://www.chosohyeon.com/", anchor: "pf01" },
    { id: 2, title: "조구만 스튜디오", type: "STANDARD WEB", font: ["Montserrat", "Nanum Gothic"], info: ".", skill: ["HTML", "CSS", "JAVA SCRIPT"], src: process.env.PUBLIC_URL + "/favicon.png", link: "http://desipossa.github.io/", anchor: "pf02" },
    { id: 3, title: "디오디너리", type: "STANDARD WEB", font: ["Noto Sans Korean"], info: ".", skill: ["HTML", "CSS", "JAVA SCRIPT"], src: process.env.PUBLIC_URL + "/favicon.png", link: "http://desipossa.github.io/", anchor: "pf03" },
    { id: 4, title: "궁디팡팡 캣페스타", type: "STANDARD WEB", font: ["Nanum Gothic"], info: ".", skill: ["HTML", "CSS", "JAVA SCRIPT"], src: process.env.PUBLIC_URL + "/favicon.png", link: "http://desipossa.github.io/", anchor: "pf04" }
]

export default PD;

const profile = {
    name: "choso",
    email: "sipossa@naver.com",
    tel: "010-6456-4960"
}

export { profile }

const portfolio = [
    { id: 1, title: "hd01", type: "Responsive Web", font: ["Noto Sans Korean", "Playfair Display", "IM Fell English SC"], info: "브랜드의 원래 로고나 제품 패키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점 이라고 생각해 타이포그라피와 색감을\n이용해 디자인했습니다.", color: ["#369", "#f00", "tomato"], skill: ["react", "react-router-dom", "axios", "redux-tollkit"], src: process.env.PUBLIC_URL + "/favicon.png", link: "http://desipossa.github.io/" },
    { id: 2, title: "hd02", type: "Responsive Web", font: ["Noto Sans Korean", "Playfair Display", "IM Fell English SC"], info: "브랜드의 원래 로고나 제품 패키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점 이라고 생각해 타이포그라피와 색감을\n이용해 디자인했습니다.", color: ["#369", "#f00", "tomato"], skill: ["react", "react-router-dom", "axios", "redux-tollkit"], src: process.env.PUBLIC_URL + "/favicon.png", link: "http://desipossa.github.io/" },
    { id: 3, title: "hd03", type: "Responsive Web", font: ["Noto Sans Korean", "Playfair Display", "IM Fell English SC"], info: "브랜드의 원래 로고나 제품 패키지 디자인을\n참고하여, 모던하고 딥한 이미지를 고취시킬\n수 있는 다크모드로 디자인 했습니다.\n전체적으로 무채색을 사용하여 브랜드의 정체성을\n드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는\n특이점 이라고 생각해 타이포그라피와 색감을\n이용해 디자인했습니다.", skill: ["react", "react-router-dom", "axios", "redux-tollkit"], src: process.env.PUBLIC_URL + "/favicon.png", link: "http://desipossa.github.io/" },
];

export { portfolio }