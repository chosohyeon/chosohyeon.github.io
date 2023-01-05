import React, { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import data from './Data';
import './reset.css';
import './Main.scss';

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
                2023 WEB FRONTEND PORTFOLIO
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
                                <div className='titleInner'>
                                    <div className='titleBox'>
                                        <div className='roundBox'>
                                            <img className='titleBg' src={process.env.PUBLIC_URL + '/img/background.png'} alt="background" />
                                            <h1 className='title'>
                                                <div>F<p>RON</p>T<p>END</p></div>
                                                <div>P<p>ORT</p>F<p>OLIO</p></div>
                                            </h1>
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
                                                    <div className='left'>

                                                    </div>
                                                    <div className='right'>
                                                        <div className='descBox'>
                                                            <p className='pfNum'>PORTFOLIO - 0{it.id}</p>
                                                            <h2 className='pfTit'>{it.title}</h2>
                                                            <h3 className='subTit'>INFO</h3>
                                                            <p className='desc'>{it.info}</p>
                                                            <h3 className='subTit'>TYPE</h3>
                                                            <p className='desc'>{it.type}</p>
                                                            <h3 className='subTit'>FONT</h3>
                                                            <p className='desc'>{it.font}</p>
                                                            <h3 className='subTit'>SKILLS</h3>
                                                            <p className='desc'>{it.skill}</p>
                                                        </div>
                                                        <button className='linkBtn'
                                                            onClick={()=>openLink(it.link)}
                                                        >
                                                            LINK
                                                        </button>
                                                        {/* <button className='linkBtn'
                                                            onClick={()=>openLink(it.link)}
                                                        >
                                                            GITHUB
                                                        </button> */}
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
            <footer footer className='Footer' >
                & copy; sohyeon 2023
            </footer >
        </div >
    )
}

function openLink(url) {
    window.open(url);
}

export default App