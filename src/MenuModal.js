import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./assets/style/menumodal.scss";

import sns1 from "./assets/images/sns1.jpg";
import sns2 from "./assets/images/sns2.jpg";
import sns3 from "./assets/images/sns3.png";
import sns4 from "./assets/images/sns4.jpg";
import sns5 from "./assets/images/sns5.png";

const snsData = [
  { id: 1, img: sns1, title: "instagram" },
  { id: 2, img: sns2, title: "youtube" },
  { id: 3, img: sns3, title: "blog" },
  { id: 4, img: sns4, title: "kakaotalk" },
  { id: 5, img: sns5, title: "facebook" },
];

function MenuModal() {
  const Menu = [
    { id: 1, name: "회사소개" },
    { id: 2, name: "사업소개" },
    { id: 3, name: "제품소개" },
    { id: 4, name: "온라인문의" },
    { id: 5, name: "고객센터" },
  ];

  const smallMenu1 = [
    { id: 1, name: "인사말" },
    { id: 2, name: "연혁" },
    { id: 3, name: "조직도" },
    { id: 4, name: "찾아오시는길" },
  ];
  const smallMenu2 = [
    { id: 1, name: "사업분야" },
    { id: 2, name: "사업안내" },
    { id: 3, name: "소개/설명01" },
    { id: 4, name: "소개/설명02" },
    { id: 5, name: "갤러리01" },
    { id: 6, name: "갤러리02" },
  ];
  const smallMenu3 = [
    { id: 1, name: "제품소개1" },
    { id: 2, name: "제품소개2" },
    { id: 3, name: "제품소개3" },
    { id: 4, name: "제품소개4" },
    { id: 5, name: "제품소개5" },
  ];
  const smallMenu4 = [
    { id: 1, name: "Q & A" },
    { id: 2, name: "1:1문의" },
  ];
  const smallMenu5 = [
    { id: 1, name: "공지사항" },
    { id: 2, name: "자주하는 질문" },
    { id: 3, name: "갤러리" },
    { id: 4, name: "자유게시판" },
    { id: 5, name: "대리점안내" },
  ];

  const [openBtn, setOpenBtn] = useState(false);
  const OpenModal = () => {
    setOpenBtn(!openBtn);
  };

  return (
    <>
      <div className={openBtn ? "Toggle btnOn" : "Toggle"} onClick={OpenModal}>
        <div id="toggle_btn">
          <span className="bar1">bar1</span>
          <span className="bar2">bar2</span>
          <span className="bar3">bar3</span>
        </div>
      </div>
      <div className={openBtn ? "modalArticle modalOn" : "modalArticle"}>
        <div className={openBtn ? "ModalNav navOn" : "ModalNav"}>
          <h2 className="title">SITEMAP</h2>
          <span className="bar">bar</span>
          <div className="modalDivide">
            <div className="modalLeft">
              <div className="pageLink">
                <h2>
                  <Link to="*" className="menuList">
                    회사소개
                  </Link>
                </h2>
                <ul>
                  {smallMenu1.map((item) => (
                    <li key={item.id}>
                      <Link to="*">{item.name}</Link>
                    </li>
                  ))}
                </ul>
                <h2>
                  <Link to="*" className="menuList">
                    사업소개
                  </Link>
                </h2>
                <ul>
                  {smallMenu2.map((item) => (
                    <li key={item.id}>
                      <Link to="*">{item.name}</Link>
                    </li>
                  ))}
                </ul>
                <h2>
                  <Link to="*" className="menuList">
                    제품소개
                  </Link>
                </h2>
                <ul>
                  {smallMenu3.map((item) => (
                    <li key={item.id}>
                      <Link to="*">{item.name}</Link>
                    </li>
                  ))}
                </ul>
                <h2>
                  <Link to="*" className="menuList">
                    온라인문의
                  </Link>
                </h2>
                <ul>
                  {smallMenu4.map((item) => (
                    <li key={item.id}>
                      <Link to="*">{item.name}</Link>
                    </li>
                  ))}
                </ul>
                <h2>
                  <Link to="*" className="menuList">
                    고객센터
                  </Link>
                </h2>
                <ul>
                  {smallMenu5.map((item) => (
                    <li key={item.id}>
                      <Link to="*">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modalRight">
              <h2>010.3217.3646</h2>
              <h3>phlink@nate.com</h3>
              <p>
                성공적인 비즈니스를 실현해 드립니다.
                <br />
                (주) 미광디자인
              </p>
              <ul>
                {snsData.map((item) => (
                  <li key={item.id}>
                    <Link to="*">
                      <img src={item.img} alt={item.title} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuModal;
