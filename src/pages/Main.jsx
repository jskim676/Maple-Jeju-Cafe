import { useEffect, useState, useRef } from 'react';
import '../styles/main.css';
import pinkbeanBg from '../assets/img/pinkbean-bg.png';
import SectionTitle from '../components/SectionTitle ';
import placeImg1 from '../assets/img/place-img1.png';
import placeImg2 from '../assets/img/place-img2.png';
import placeImg3 from '../assets/img/place-img3.png';
import placeImg4 from '../assets/img/place-img4.png';
import placeImg5 from '../assets/img/place-img5.png';
import cafeImg from '../assets/img/cafe-img.png';
import storeImg from '../assets/img/store-img.png';
import lpImg from '../assets/img/lp-img.png';
import YouTubePlayer from '../components/YouTubePlayer';

const Main = () => {
    const [scrollY, setScrollY] = useState(0);

    const [rotationDegree, setRotationDegree] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const rotationRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const topValue = Math.max(-300, -scrollY * 0.3);

    const handleTimeClick = (minutes, seconds) => {
        if (window.seekToTime) {
            window.seekToTime(minutes, seconds);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            const rotate = () => {
                setRotationDegree((prev) => (prev + 0.3) % 360);
                rotationRef.current = requestAnimationFrame(rotate);
            };
            rotationRef.current = requestAnimationFrame(rotate);
        } else {
            cancelAnimationFrame(rotationRef.current);
        }
        return () => cancelAnimationFrame(rotationRef.current);
    }, [isPlaying]);

    return (
        <div className="main">
            <section>
                <h1>핑크빈이 제주에 출몰했다?!</h1>
                <div className="mainBg">
                    <img className="pinkbeanBg" src={pinkbeanBg} alt="" style={{ top: `${topValue}px` }} />
                </div>
                <p>메이플스토리 감성을 그대로 담은 테마 카페가 열렸어요!</p>
                <p>게임 속 캐릭터 컬러와 조형을 활용한 공간에서,포탈을 타고 온 핑크빈의 흔적을 찾아보세요.</p>
            </section>
            <section>
                <SectionTitle text="공간 소개" />
                <div className="place-container">
                    <div className="place-img">
                        <img src={placeImg1} alt="" />
                    </div>
                    <div className="place-img">
                        <img src={placeImg2} alt="" />
                    </div>
                    <div className="place-img">
                        <img src={placeImg3} alt="" />
                    </div>
                    <div className="place-img">
                        <img src={placeImg4} alt="" />
                    </div>
                    <div className="place-img">
                        <img src={placeImg5} alt="" />
                    </div>
                </div>
            </section>
            <section className="shop-container">
                <div className="cafe-section">
                    <SectionTitle text="카페" />
                    <p>
                        메이플스토리 테마의 음료와 디저트로 달콤한 모험을 떠나 보세요! 다양한 캐릭터들이 맛있는 음료와
                        베이커리로 재탄생하여, 화려한 개성과 귀여움이 가득한 특별한 메뉴들을 만나보세요!
                    </p>
                    <img src={cafeImg} alt="" />
                </div>
                <div className="store-section">
                    <SectionTitle text="스토어" />
                    <p>
                        제주에서 최초로 공개되는 특별한 굿즈 라인업, ‘MapleStory in Jeju’. 인형, 키링, 문구류, 텀블러 등
                        다양한 아이템으로 탄생한 한정판 굿즈를 제주에서 가장 먼저 만나보세요.
                    </p>
                    <img src={storeImg} alt="" />
                </div>
            </section>
            <section>
                <div className="lp-container">
                    <div className="lp-section">
                        <img
                            src={lpImg}
                            alt=""
                            style={{
                                transform: `rotate(${rotationDegree}deg)`,
                                transition: isPlaying ? 'none' : 'transform 0.2s ease-out',
                            }}
                        />
                        <div className="lp-about">
                            <h2>메이플스토리 제주 LP - Siesta of Jeju </h2>
                            <p>푸른 제주 바람을 닮은 선율, 메이플스토리의 감성을 한 장의 바이닐에 담다.</p>
                            <p>
                                잔잔한 여유와 모험의 추억이 깃든 사운드, 당신의 플레이리스트에 새로운 휴식을 선물합니다.
                            </p>
                            <p>한정판으로 만나는 특별한 순간, Siesta of Jeju와 함께 메이플의 세계로 떠나보세요.</p>
                        </div>
                    </div>
                    <div className="video-section">
                        <YouTubePlayer setIsPlaying={setIsPlaying} className="video-container" />
                        <div className="timeline">
                            <ul>
                                <li>
                                    1. Title (Login) -
                                    <span
                                        className="time-link"
                                        onClick={() => handleTimeClick(0, 0)}
                                        style={{ cursor: 'pointer', color: '#4285f4' }}
                                    >
                                        0:00
                                    </span>
                                </li>
                                <li>
                                    2. Above the Treetops -
                                    <span
                                        className="time-link"
                                        onClick={() => handleTimeClick(4, 40)}
                                        style={{ cursor: 'pointer', color: '#4285f4' }}
                                    >
                                        04:40
                                    </span>
                                </li>
                                <li>
                                    3. Cygnus Garden -
                                    <span
                                        className="time-link"
                                        onClick={() => handleTimeClick(9, 21)}
                                        style={{ cursor: 'pointer', color: '#4285f4' }}
                                    >
                                        09:21
                                    </span>
                                </li>
                                <li>
                                    4. Blooming Forest -
                                    <span
                                        className="time-link"
                                        onClick={() => handleTimeClick(13, 4)}
                                        style={{ cursor: 'pointer', color: '#4285f4' }}
                                    >
                                        13:04
                                    </span>
                                </li>
                                <li>
                                    5. Wonderful Moments in Narin -
                                    <span
                                        className="time-link"
                                        onClick={() => handleTimeClick(16, 28)}
                                        style={{ cursor: 'pointer', color: '#4285f4' }}
                                    >
                                        16:28
                                    </span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    6. Bad Guys (Kerning City) -
                                    <span
                                        className="time-link"
                                        onClick={() => handleTimeClick(20, 36)}
                                        style={{ cursor: 'pointer', color: '#4285f4' }}
                                    >
                                        20:36
                                    </span>
                                </li>
                                <li>
                                    7. Lovers in the Afternoon (Kerning Tower) -
                                    <span
                                        className="time-link"
                                        onClick={() => handleTimeClick(24, 32)}
                                        style={{ cursor: 'pointer', color: '#4285f4' }}
                                    >
                                        24:32
                                    </span>
                                </li>
                                <li>
                                    8. Kerning Square -
                                    <span
                                        className="time-link"
                                        onClick={() => handleTimeClick(27, 50)}
                                        style={{ cursor: 'pointer', color: '#4285f4' }}
                                    >
                                        27:50
                                    </span>
                                </li>
                                <li>
                                    9. Snowy Village (El Nath) -
                                    <span
                                        className="time-link"
                                        onClick={() => handleTimeClick(31, 47)}
                                        style={{ cursor: 'pointer', color: '#4285f4' }}
                                    >
                                        31:47
                                    </span>
                                </li>
                                <li>
                                    10. Flying in a Blue Dream (Orbis) -
                                    <span
                                        className="time-link"
                                        onClick={() => handleTimeClick(35, 43)}
                                        style={{ cursor: 'pointer', color: '#4285f4' }}
                                    >
                                        35:43
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;
