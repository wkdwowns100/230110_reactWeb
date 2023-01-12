import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/style/menu.scss";



function Menu() {
  const smallMenu1 = [
    { id: 1, name: "인사말" },
    { id: 2, name: "연력" },
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

  

  return (
    <div className="headerNav">
      <ul className="NavMenu">
        <li className="largeMenu">
          <Link to="*" className="menuList">회사소개</Link>
          
          <ul className="smallMenu">
            {smallMenu1.map((item) => (
              <li key={item.id}>
                <Link to="*">{item.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="largeMenu">
          <Link to="*" className="menuList">사업소개</Link>
          
          <ul className="smallMenu">
            {smallMenu2.map((item) => (
              <li key={item.id}>
                <Link to="*">{item.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="largeMenu">
          <Link to="*" className="menuList">제품소개</Link>
          
          <ul className="smallMenu">
            {smallMenu3.map((item) => (
              <li key={item.id}>
                <Link to="*">{item.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="largeMenu">
          <Link to="*" className="menuList">온라인문의</Link>
          
          <ul className="smallMenu">
            {smallMenu4.map((item) => (
              <li key={item.id}>
                <Link to="*">{item.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="largeMenu">
          <Link to="*" className="menuList">고객센터</Link>
          
          <ul className="smallMenu">
            {smallMenu5.map((item) => (
              <li key={item.id}>
                <Link to="*">{item.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
