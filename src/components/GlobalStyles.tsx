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


  .divider-1, .divider-2 {
    width: 100%;
    overflow: hidden;
  }

  .divider-1 {
    padding-bottom: 143px;
    background-color: ${(props) => props.theme.backgroundAlternative};

    .shape-fill {
      fill: ${(props) => props.theme.background};
    }

    svg {
      max-width: inherit;
      display: block;
      width: calc(111% + 1.3px);
      height: 143px;
    }
  }

  .divider-2 {
    padding-bottom: 113px;
    background-color: ${(props) => props.theme.background};

    svg {
      max-width: inherit;
      display: block;
      width: calc(216% + 1.3px);
      height: 113px;
    }

    .shape-fill {
      fill: ${(props) => props.theme.backgroundAlternative};
    }
  }

  @media (min-width: ${(props) => props.theme.viewSizesMin.$screenXs}) {
    max-width: 100vw;

    .divider-1 {
      padding-bottom: 0;

      svg {
        max-width: inherit;
        display: block;
        width: calc(111% + 1.3px);
        height: 50px;
      }
    }

    .divider-2 {
      padding-bottom: 0;
    }
  }

  // @media screen and (min-width: ${(props) => props.theme.viewSizesMin.$screenXl}) {
  //   body {
  //     border: 2px solid green;
  //   }
  // }
  //
  // @media screen and (min-width: ${(props) => props.theme.viewSizesMin.$screenLg}) and (max-width: ${(props) => props.theme.viewSizesMin.$screenXl}) {
  //   body {
  //     border: 2px solid blue;
  //   }
  // }
  //
  // @media screen and (min-width: ${(props) => props.theme.viewSizesMin.$screenMd}) and (max-width: ${(props) => props.theme.viewSizesMin.$screenLg}) {
  //   body {
  //     border: 2px solid aqua;
  //   }
  // }
  //
  // @media screen and (min-width: ${(props) => props.theme.viewSizesMin.$screenSm}) and (max-width: ${(props) => props.theme.viewSizesMin.$screenMd}) {
  //   body {
  //     border: 2px solid rosybrown;
  //   }
  // }
  //
  // @media screen and (min-width: ${(props) => props.theme.viewSizesMin.$screenXs}) and (max-width: ${(props) => props.theme.viewSizesMin.$screenSm}) {
  //   body {
  //     border: 2px solid lightseagreen;
  //   }
  // }
  // @media screen and (max-width: ${(props) => props.theme.viewSizesMin.$screenXs}) {
  //   body {
  //     border: 2px solid red;
  //   }
  // }
`;
