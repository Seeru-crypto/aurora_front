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
        <title>Fred Oja</title>
        <meta name='keywords' content='IT development, programming, software engineering, web development' />
        <meta name='description' content='Your IT development and programming resource hub' />
        <meta name='robots' content='index, follow' />
      </Head>
      <GlobalStyles activeTheme={activeTheme} />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}
