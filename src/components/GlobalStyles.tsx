import { createGlobalStyle } from 'styled-components';
import { ActiveTheme } from '../state/themeSlice';
import { FredTheme } from '../Themes';

export default createGlobalStyle<{ activeTheme: string; theme: FredTheme }>`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Montserrat&display=swap');

:root {
    --bkg-color: #fffffe;
    --primary-color: #6246ea;
    --primary-color-300: hsla(250, 80%, 60%, 0.353);

    --secondary-color: #d1d1e9;
    --button-text: #fffffe;
    --paragraph: #2b2c34;
    --header-color: #2b2c34;
    --hero-section-bkg: #444;
    --icon-highlight-border: purple;
    --btn-hover-bkg: purple;
    --nav-main-btn-color: purple;
    --nav-active-color: purple;
    --box-shadow: #2b2c34;
    --transition: all 0.3s ease-in-out;
    --front-topic-color: red;
    --back-topic-color: green;
    --other-topic-color: purple;
    --db-topic-color: blue;
    --table-even: #cbd5e1; /*Slate 300  */
    --table-uneven: #f1f5f9; /* Slate 100 */
}

html {  
  scroll-behavior: smooth;
  scroll-padding-top: 5vmax;
}

body {
  background-color: ${(props) => props.activeTheme === ActiveTheme.NIGHT && props.theme.background};
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.primaryFont};
  margin: 0;
  padding: 0;
  transition: background-color ${(props) => props.theme.transition};
}

main {
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
  max-width: 1200px;

  /* TODO: Get the dynamic size of Header */
  > section {
    min-height: calc(100vh - 80px);
  }
}
`;
