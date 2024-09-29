import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import Header from './Header';
import { RootState, useAppSelector } from '../state/store';
import { ActiveTheme } from '../state/themeSlice';
import { DayTheme, NightTheme } from '../Themes';

export default function Layout({ children }: any): JSX.Element {
  const activeTheme = useAppSelector((state: RootState) => state.theme.activeTheme);

  return (
    <ThemeProvider theme={activeTheme === ActiveTheme.DAY ? DayTheme : NightTheme}>
      <Head>
        <title>Aurora</title>
      </Head>
      <GlobalStyles activeTheme={activeTheme} />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}
