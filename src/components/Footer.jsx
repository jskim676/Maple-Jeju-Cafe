import '../styles/footer.css';
import logo from '../assets/img/logo.svg';

const Footer = () => {
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="" />
            <div className="information">
                <div>
                    <p>제주시 1100로 3198-8 , 제주특별자치도</p>
                    <p>넥슨컴퓨터박물관 지하 1층</p>
                </div>
                <div>
                    <p>화 - 일요일 10:00 - 18:00 </p>
                    <p>(라스트 오더 17:30)</p>
                    <p>매주 월요일, 설, 추석 당일은 휴무</p>
                </div>
                <div>
                    <p>이메일 | cafe_maple@nexonspace.co.kr </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
