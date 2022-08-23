import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { RootState, useAppSelector } from '../state/store';
import { ActiveTheme } from '../state/themeSlice';
import { DayTheme, NightTheme } from '../Themes';

export default function Layout({ children }: any): JSX.Element {
  const activeTheme = useAppSelector((state: RootState) => state.theme.activeTheme);

  return (
    <ThemeProvider theme={activeTheme === ActiveTheme.DAY ? DayTheme : NightTheme}>
      <GlobalStyles activeTheme={activeTheme} />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
