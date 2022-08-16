import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/layout/layout";
import { store } from "../state/store";
import "../styles/globals.css";
import "../styles/topic.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
