import React from "react";
import { Link } from "react-router-dom";
import sns1 from "./assets/images/sns1.jpg";
import sns2 from "./assets/images/sns2.jpg";
import sns3 from "./assets/images/sns3.png";
import sns4 from "./assets/images/sns4.jpg";
import sns5 from "./assets/images/sns5.png";
import sns6 from "./assets/images/sns6.jpg";
import sns7 from "./assets/images/sns7.png";
import "./assets/style/footer.scss";

const snsData = [
  { id: 1, img: sns1, title: "instagram" },
  { id: 2, img: sns2, title: "youtube" },
  { id: 3, img: sns3, title: "blog" },
  { id: 4, img: sns4, title: "kakaotalk" },
  { id: 5, img: sns5, title: "facebook" },
  { id: 6, img: sns6, title: "naverTV" },
  { id: 7, img: sns7, title: "kakaoTV" },
];
function Footer() {
  return (
    <div className="footerBox">
      <div className="shorts">
        <ul className="shortInfo">
          <li>
            <Link to="*">개인정보처리방침</Link>
          </li>
          <li>
            <Link to="*">이메일무단수집거부</Link>
          </li>
          <li>
            <Link to="*">찾아오시는 길</Link>
          </li>
        </ul>
      </div>
      <div className="footerWrap">
        <ul>
          {snsData.map((item) => (
            <li key={item.id}>
              <Link to="*">
                <img src={item.img} alt={item.title} />
              </Link>
            </li>
          ))}
        </ul>
        <p>
          주소 : 서울시 중구 태평로 1가 우리빌딩주식회사{" "}
          <span>&nbsp;/&nbsp;</span> 대표 : 홍길동 <span>&nbsp;/&nbsp;</span>{" "}
          전화 : 02&#41;123-4567 <span>&nbsp;/&nbsp;</span>팩스 :
          02&#41;123-4567 <span>&nbsp;/&nbsp;</span> 이메일 : phlink@nate.com
        </p>
        <p>
          Copyright &copy; 미광디자인. All rights reserved{" "}
          <span className="grayTxt">Desig by MG</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
