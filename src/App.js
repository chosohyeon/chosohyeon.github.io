import React, { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import data from './data';
import './reset.css';
import './main.scss';

const App = () => {
    const [num, setNum] = useState(1);
    const [con, setCon] = useState('cover');
    const [on, setOn] = useState(false);
    const ac = data.map(it => it.anchor);

    const Cover = () => {
        return <div className={`cover ${on ? 'on' : ''}`}>
            <ul>
                {
                    data.map((it, idx) => {
                        return (
                            <li>
                                <a href={`#${it.anchor}`} onClick={
                                    () => setOn(!on)
                                }>{it.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    }

    return (
        <div className='PF'>
            <Cover />
            <header className='header'>
                {/* 2023 hyeon portfolio {num} {con} */}
                2022 WEB<br />FRONTEND<br />PORTFOLIO
            </header>
            {/* 커버 오픈 버튼 */}
            <button onClick={() => setOn(!on)} className={`cover_open ${on ? 'on' : ''}`}>
                <span>cover out</span>
            </button>
            {/* 오른쪽 페이지 이동 버튼 */}
            <nav className='gnb'>
                <ul>
                    {
                        ['cover', ...ac, 'copyright'].map((it, idx) => {
                            return (
                                <li className={num === (idx + 1) ? 'on' : ''}>
                                    <a href={`#${it}`}>{it}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */
                anchors={['cover', ...ac, 'copyright']}
                afterLoad={(origin, destination) => {
                    setNum(destination.index + 1);
                    setCon(destination.anchor)
                }
                }

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <div className='inner'>
                                    <div className='title_box'>
                                        {/* <h1 className='title'>FORTFOLIO TITLE</h1> */}
                                        <h1 className='title'><p>W</p>EB <p>W</p>ORLD <p>W</p>INDOW</h1>
                                        <p className='sub_title'>두 세상을 연결하는 프론트엔드 개발자 소현입니다.</p>
                                        <div className='desc'>
                                            <p>titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle</p>
                                            <p>titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle</p>
                                            <p>titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                data.map(it => {
                                    return (
                                        <div className="pfpages section">
                                            <div className='inner'>
                                                <div className='page'>
                                                    {/* {
                                                        data.color?.map(color => <li style={{ background: color }}>{color}</li>)
                                                    } */}
                                                    <div className='img'>여기에 이미지가 들어갑니다.</div>
                                                    <h2><p>0{it.id}</p>. Portfolio project title</h2>
                                                    <div className='info_box'>
                                                        <div className='left'>
                                                            <h3>INFO</h3>
                                                            <p>브랜드의 원래 로고나 제품 패키지 디자인을 참고하여, 모던하고 딥한 이미지를 고취시킬 수 있는 다크모드로 디자인 했습니다.<br />전체적으로 무채색을 사용하여 브랜드의 정체성을 드러냈고, 첫번째 섹션은 브랜드만이 가지고 있는 특이점 이라고 생각해<br />타이포그라피와 색감을 이용해 디자인했습니다.</p>
                                                            <button>LINK</button>
                                                        </div>
                                                        <div className='right'>
                                                            <h3>TYPE</h3>
                                                            <p>Responsive Web</p>
                                                            <h3>FONT</h3>
                                                            <p>Noto Sans, Pretendard</p>
                                                            <h3>SKILLS</h3>
                                                            <p>html, css, javascript </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="section">
                                <p className='inner'>마지막 페이지구만 그려 여기다가 프로필을 넣어주면 되겠구만</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
            <footer className='Footer'>
                &copy; sohyeon 2022
            </footer>
        </div>
    )
}

export default App