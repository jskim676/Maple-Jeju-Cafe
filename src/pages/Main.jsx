import { useEffect, useState } from 'react';
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

const Main = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const topValue = Math.max(-300, -scrollY * 0.5);

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
        </div>
    );
};

export default Main;
