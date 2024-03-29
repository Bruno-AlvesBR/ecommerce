import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    max-width: 100vw;
    position: relative;
    font-size: 92.5%;
    background: #aaaaaa15;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
