import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import "../styles/highlight/dracula.css";

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
