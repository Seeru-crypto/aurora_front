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
      padding-bottom: 2rem;
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

  .divider-1 {
    background-color: ${(props) => props.theme.backgroundAlternative};
    max-width: 100vw;
    padding-bottom:84px ;

    svg {
      max-width: inherit;
      //position: relative;
      display: block;
      width: calc(206% + 1.3px);
      height: 84px;
    }

    .shape-fill {
      fill: ${(props) => props.theme.background};
    }
  }

  .divider-2 {
    background-color: ${(props) => props.theme.background};
    padding-bottom:84px ;
    max-width: 100vw;

    svg {
      max-width: inherit;
      position: relative;
      display: block;
      width: calc(149% + 1.3px);
      height: 84px;
    }

    .shape-fill {
      fill: ${(props) => props.theme.backgroundAlternative};
    }
  }
`;
