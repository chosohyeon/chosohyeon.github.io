const portfolioData = [
    { id: 1, title: "엘릭시르", type: "STANDARD WEB", font: ["Nanum Myeongjo ", "Noto Sans Korean"], info: "본래의 디자인을 최대한 살리면서도 아이템을 효과적으로 노출시킬 수 있도록 웹을 구성하였습니다. 클라이언트에서 서버로의 Request와 Response를 통해 데이터를 주고받을 수 있으며, 백엔드와의 협업을 가정하여 설계하였습니다. 따라서 실제 사용 시 필요한 제어를 이루기 위해 유효성검사 및 권한에 따른 조작설계를 반영하였습니다.", skill: ["React", "React-Router-Dom", "Axios", "Scss ", "Java Script"], src: process.env.PUBLIC_URL + "/favicon.png", link: "https://www.chosohyeon.com/", anchor: "pf01", img: "thumbnail01.png", git:"" },
    { id: 2, title: "조구만 스튜디오", type: "STANDARD WEB", font: ["Montserrat ", "Nanum Gothic"], info: ".", skill: ["Html", "Css", "Java Script"], src: process.env.PUBLIC_URL + "/favicon.png", link: "http://desipossa.github.io/", anchor: "pf02", img: "thumbnail02.png" },
    { id: 3, title: "디오디너리", type: "STANDARD WEB", font: ["Noto Sans Korean"], info: ".", skill: ["Html", "Css", "Java Script"], src: process.env.PUBLIC_URL + "/favicon.png", link: "http://desipossa.github.io/", anchor: "pf03", img: "thumbnail03.png" },
    { id: 4, title: "궁디팡팡 캣페스타", type: "STANDARD WEB", font: ["Nanum Gothic"], info: ".", skill: ["Html", "Css", "Java Script"], src: process.env.PUBLIC_URL + "/favicon.png", link: "http://desipossa.github.io/", anchor: "pf04" , img: "thumbnail04.png"}
]

export { portfolioData };

const profile = {
    name: "chosohyeon",
    email: "sohyeo0723@naver.com",
    tel: "010-6503-6521"
}

export { profile };