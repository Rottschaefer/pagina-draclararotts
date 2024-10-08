import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
  scroll-behavior: smooth;
}





  body {
    letter-spacing: 5px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Questrial", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
