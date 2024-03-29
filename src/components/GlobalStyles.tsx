import { createGlobalStyle } from 'styled-components';
import { ActiveTheme } from '../state/themeSlice';
import { FredTheme } from '../Themes';

export default createGlobalStyle<{ activeTheme: string; theme: FredTheme }>`
html {  
  scroll-behavior: smooth;
  scroll-padding-top: 5vmax;
}

body {
  background-color: ${(props) => props.activeTheme === ActiveTheme.NIGHT && props.theme.background};
  color: ${(props) => props.theme.textColor};
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
