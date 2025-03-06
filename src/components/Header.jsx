import '../styles/header.css';
import '../styles/colors.css';
import headerImg from '../assets/img/header-bg.png';

const Header = () => {
    return (
        <div className="header">
            <div></div>
            <img src={headerImg} alt="카페 헤더 이미지" />
            <div className="slogan">
                <p>달콤한 휴식으로 여러분을 초대합니다</p>
            </div>
        </div>
    );
};

export default Header;
