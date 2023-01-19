import React, { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import { profile, portfolioData } from "./data";
import './reset.css';
import './Main.scss';

const App = () => {
    const [num, setNum] = useState(1);
    const [con, setCon] = useState('cover');
    const [on, setOn] = useState(false);
    const ac = portfolioData.map(it => it.anchor);

    return (
        <div className='PF'>
            <header className='header'>
                2023 WEB FRONTEND PORTFOLIO
            </header>
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
                                <div className='profileSection'>
                                    <h2 className='profileName'>{profile.name}</h2>
                                    <div className='profileDesc'>
                                        <div className='leftBox'>
                                            <h3>PROFILE</h3>
                                            <ul>
                                                <li>{profile.email}</li>
                                                <li>{profile.tel}</li>
                                            </ul>
                                        </div>
                                        <div className='rightBox'>
                                            <h3>SKILLS</h3>
                                            <ul>
                                                <li>
                                                    <h4>Language</h4>
                                                    {profile.lang.map((el, idx) => {
                                                        return (
                                                            <ul key={idx}>
                                                                <li>{el}</li>
                                                            </ul>
                                                        );
                                                    })}
                                                </li>
                                                <li>
                                                    <h4>Library / FrameWork</h4>
                                                    {profile.libframe.map((el, idx) => {
                                                        return (
                                                            <ul key={idx}>
                                                                <li>{el}</li>
                                                            </ul>
                                                        );
                                                    })}
                                                </li>
                                                <li>
                                                    <h4>Tools</h4>
                                                    {profile.tool.map((el, idx) => {
                                                        return (
                                                            <ul key={idx}>
                                                                <li>{el}</li>
                                                            </ul>
                                                        );
                                                    })}
                                                </li>
                                                <li>
                                                    <h4>Graphics</h4>
                                                    {profile.graphic.map((el, idx) => {
                                                        return (
                                                            <ul key={idx}>
                                                                <li>{el}</li>
                                                            </ul>
                                                        );
                                                    })}
                                                </li>
                                                <li>
                                                    <h4>Others</h4>
                                                    {profile.others.map((el, idx) => {
                                                        return (
                                                            <ul key={idx}>
                                                                <li>{el}</li>
                                                            </ul>
                                                        );
                                                    })}
                                                </li>
                                            </ul>
                                        </div>
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