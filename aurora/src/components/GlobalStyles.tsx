import { createGlobalStyle } from 'styled-components';
import { ActiveTheme } from '../state/themeSlice';

export default createGlobalStyle<{ activeTheme: string }>`
html {  
  scroll-behavior: smooth;
  scroll-padding-top: 5vmax;
}

body {
  background-color: ${(props) => props.activeTheme === ActiveTheme.NIGHT && props.theme.background};
  color: ${(props) => props.theme.text};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  transition: background-color ${(props) => props.theme.transition};
}

main {
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
  max-width: 1200px;
}

main > section {
  border: 2px dashed pink;
  min-height: calc(100vh - 4.5rem);
}

.unused {
    font-family: 'IBM Plex Mono', monospace;
}
`;
