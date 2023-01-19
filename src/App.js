import React, { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
// import data from './Data';
import { profile, portfolioData } from "./Data";
import './reset.css';
import './Main.scss';

const App = () => {
    const [num, setNum] = useState(1);
    const [con, setCon] = useState('cover');
    const [on, setOn] = useState(false);
    const ac = portfolioData.map(it => it.anchor);

    // const Cover = () => {
    //     return <div className={`cover ${on ? 'on' : ''}`}>
    //         <div className='indexBox'>
    //             <h2 className='indexTitle'>
    //                 I<p>NDEX</p>
    //             </h2>
    //             <ul>
    //                 {
    //                     portfolioData.map((it, idx) => {
    //                         return (
    //                             <li className='linkList'>
    //                                 <a href={`#${it.anchor}`} onClick={
    //                                     () => setOn(!on)
    //                                 }>0{it.id}. {it.title}</a>
    //                             </li>
    //                         )
    //                     })
    //                 }
    //             </ul>
    //         </div>
    //     </div>
    // }

    return (
        <div className='PF'>
            {/* <Cover /> */}
            <header className='header'>
                2023 WEB FRONTEND PORTFOLIO
            </header>
            {/* 커버 오픈 버튼 */}
            {/* <button onClick={() => setOn(!on)} className={`cover_open ${on ? 'on' : ''}`}>
                <span>cover out</span>
            </button> */}
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
                                                F<p>RONT</p>E<p>ND</p><br />
                                                P<p>ORT</p>F<p>OLIO</p>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                portfolioData.map(it => {
                                    return (
                                        <div className="pfpages section">
                                            <div className='inner'>
                                                <div className='page'>
                                                    <div className='left'>
                                                        <figure className={`thumb0${it.id}`}>
                                                        </figure>
                                                    </div>
                                                    <div className='right'>
                                                        <div className='descBox'>
                                                            <p className='pfNum'>PORTFOLIO - 0{it.id}</p>
                                                            <h2 className='pfTit'>{it.title}</h2>
                                                            <h3 className='subTit'>INFO</h3>
                                                            <p className='desc'>{it.info}</p>
                                                            <h3 className='subTit'>FONT</h3>
                                                            <p className='desc'>
                                                                {it.font?.map((descFont, idx) => {
                                                                    return (
                                                                        <ul key={idx}>
                                                                            <li>{descFont}</li>
                                                                        </ul>
                                                                    );
                                                                })}
                                                            </p>
                                                            <h3 className='subTit'>SKILLS</h3>
                                                            <p className='desc'>
                                                                {it.skill?.map((descSkill, idx) => {
                                                                    return (
                                                                        <ul key={idx}>
                                                                            <li>{descSkill}</li>
                                                                        </ul>
                                                                    );
                                                                })}
                                                            </p>
                                                        </div>
                                                        <div className='btnBox'>
                                                            <button className='linkBtn'
                                                                onClick={() => openLink(it.link)}
                                                            >
                                                                LINK
                                                            </button>
                                                            <button className='linkBtn'
                                                                onClick={() => openLink(it.git)}
                                                            >
                                                                GITHUB
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="section">
                                <div>
                                    <h2>{profile.name}</h2>
                                    <div>
                                        <h3>PROFILE</h3>
                                        <ul>
                                            <li>{profile.email}</li>
                                            <li>{profile.tel}</li>
                                        </ul>
                                        <h3>SKILL</h3>
                                        <ul>
                                            <li>
                                                <h4>언어</h4>
                                                <ul>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4>라이브러리 프레임워크</h4>
                                                <ul>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4>그래픽</h4>
                                                <ul>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div >
    )
}

function openLink(url) {
    window.open(url);
}

export default App