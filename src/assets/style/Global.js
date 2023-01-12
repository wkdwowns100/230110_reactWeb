import { createGlobalStyle } from "styled-components";
// npm i styled-reset, yarn add styled-reset 설치 필요. GlobalStyle` ${reset}`;

// import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  /* 외부 서체 링크 */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

  body, input, button {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    line-height: 1.6;
    margin:0;
  }
  body * {
    box-sizing: border-box;
    z-index: 1;
    
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {list-style: none;
  padding: 0;}
`;

export default GlobalStyle;
