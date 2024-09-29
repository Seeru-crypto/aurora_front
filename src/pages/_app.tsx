import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../state/store";
import dynamic from 'next/dynamic';
import Loading from './loading';

export default function Aurora({
  Component,
  pageProps,
}: AppProps): JSX.Element {

  const Layout = dynamic(() => import('../layout/Layout'), {
    ssr: false,
    loading: () => <Loading />,
  });

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
