import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
