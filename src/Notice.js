import React from "react";
import styled from "styled-components";

const MidNotice = styled.div`
  border-bottom: 1px solid #dfdfdf;
  position: relative;
  .notice {
    width: 1200px;
    height: 75px;
    margin: 0 auto;
    padding: 10;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr 0.8fr;
    line-height: 75px;
    .noti {
      margin: 0 auto;
    }
  }
  a {
    text-decoration: none;
  }
  .spanbox {
    margin: 16px auto;
    position: relative;
    border: 1px solid #dfdfdf;
    width: 42px;
    height: 42px;
  }
  span {
    position: absolute;
    top: 19px;
    left: 13px;

    width: 15px;
    height: 1px;
    background-color: #adadad;
    transition: 0.2s;
    text-indent: -9999px;
  }
  .bar2 {
    transform: rotate(90deg);
  }
`;

function Notice() {
  return (
    <MidNotice>
      <div className="notice">
        <div className="noti">NOTICE</div>
        <div>
          <a href="#">&middot; 반응형 홈페이지 입니다</a>
        </div>
        <div>2018-05-21</div>
        <div className="spanbox">
          <span className="bar1">bar1</span>
          <span className="bar2">bar2</span>
        </div>
      </div>
    </MidNotice>
  );
}

export default Notice;
