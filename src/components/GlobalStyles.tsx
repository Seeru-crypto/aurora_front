import { createGlobalStyle } from 'styled-components';
import { FredTheme } from '../Themes';

export default createGlobalStyle<{ activeTheme: string; theme: FredTheme }>`
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5vmax;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/resources/fonts/Montserrat/Montserrat-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textColor};
    font-family: 'Montserrat', sans-serif;
    //font-family: ${(props) => props.theme.primaryFont};
    margin: 0;
    padding: 0;
    transition: background-color ${(props) => props.theme.transition};
  }

  main {
    display: flex;
    flex-flow: column wrap;
    margin: 0 auto;
    max-width: 100%;
    
    > section {
      min-height: calc(100vh - 80px);
    }

    @media (max-width: 1200px) {
      max-width: 100vw;

      p {
        max-width: 40ch;
      }

    }
  }

  p {
    line-height: 1.4;
    font-size: 16px;
    max-width: 70ch;
  }
`;
