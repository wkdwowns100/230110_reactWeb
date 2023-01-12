import { Link } from "react-router-dom";
import styled from "styled-components";
import sub1 from "./assets/images/sub1.jpg";
import sub2 from "./assets/images/sub2.jpg";

const Sub1 = styled.div`
  margin: 90px auto;
  width: 1200px;
  height: 760px;
  display: flex;
  flex-wrap: wrap;
  .sub {
    width: 600px;
    height: 380px;
  }
  .subTxt {
    font-size: 16px;
    background-color: #f5f5f5;
    padding: 70px 100px;
    color: #888;
    a {
      display: inline-block;
      box-sizing: border-box;
      text-align: center;

      width: 120px;
      height: 50px;
      padding: 12px 5px;
      border: 1px solid #cfcfcf;
      border-radius: 5px;
      font-size: 15px;
      margin: 25px 5px;
      color: #333;
      text-decoration: none;
    }
  }
`;

function InnerSub1() {
  return (
    <Sub1>
      <div className="sub subTxt">
        <p>
          최고의 IT 서비스 기업임을 자부하고 있는 저희 회사는 지난 1999년 설립된
          이후, 고객과 사회의 이익을 위해 끊임없이 연구하고 노력 발전해왔습니다.
        </p>
        <div>
          <Link to="*">회사소개</Link>
          <Link to="*">연혁</Link>
          <Link to="*">조직도</Link>
        </div>
      </div>
      <div className="sub subImg">
        <img src={sub1} alt="" />
      </div>
      <div className="sub subImg">
        <img src={sub2} alt="" />
      </div>
      <div className="sub subTxt">
        <p>
          고객에게 지속적인 양질의 서비스를 제공하는 것을 최고의 목표로 하는
          저희 회사는, 인터넷을 기반으로 하는 온라인의 가상세계를 풍요롭고
          쾌적한 환경으로 발전시키고자 합니다.
        </p>
        <div>
          <Link to="*">사업소개</Link>
          <Link to="*">사업분야</Link>
        </div>
      </div>
    </Sub1>
  );
}

export default InnerSub1;
