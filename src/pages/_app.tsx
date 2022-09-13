import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../layout/Layout";
import { store } from "../state/store";

export default function Aurora({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
