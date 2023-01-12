import styled from "styled-components";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";
const Introduce = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 385px;
  padding: 90px 0 90px;
  margin-bottom: 90px;
  ul {
    margin: 0 auto;
    width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    li:nth-child(4) {
      border: none;
    }
    li {
      text-align: center;
      border-right: 1px solid #dfdfdf;
      a {
        width: 100%;
        position: relative;
        display: inline-block;
        height: 200px;
        padding-top: 10px;
        h3 {
          color: #333;
          font-size: 20px;
          font-weight: 400;
          padding: 0 0 25px;
          margin: 0;
        }
        p {
          color: #888;
          font-size: 16px;
          padding: 0;
          margin: 0;
        }
        img {
          position: absolute;
          left: 120px;
          bottom: 0;
          margin-top: 20px;
          width: 60px;
          height: 60px;
          transition: 0.3s;
        }
      }
      &:hover img {
        transform: translateY(-10px);
      }
    }
  }
`;

const inner = [
  {
    id: 1,
    title: "회사소개",
    text1: "고객만족 극대화를 목표로",
    text2: "최고의 기업이 되겠습니다.",
    logo: icon1,
  },
  {
    id: 2,
    title: "오시는 길",
    text1: "지속적인 연구개발을 통한",
    text2: "품질향상에 노력하고 있습니다.",
    logo: icon2,
  },
  {
    id: 3,
    title: "자주하는 질문",
    text1: "고객감동을 위해",
    text2: "최선을 다하는 기업",
    logo: icon3,
  },
  {
    id: 4,
    title: "문의전화",
    text1: "010.3217.3646",
    logo: icon4,
  },
];
function IntroduceBox() {
  return (
    <Introduce>
      <ul>
        {inner.map((item) => (
          <li key={item.id}>
            <a href="#">
              <h3>{item.title}</h3>
              <p>{item.text1}</p>
              <p>{item.text2}</p>
              <img src={item.logo} alt={item.title} />
            </a>
          </li>
        ))}
      </ul>
    </Introduce>
  );
}

export default IntroduceBox;
