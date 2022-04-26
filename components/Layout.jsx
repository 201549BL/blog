import { ThemeProvider } from "styled-components";
import useThemeToggle from "../hooks/useThemeToggle";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "./header/Header";
import styled from "styled-components";

const Main = styled.main`
  padding: 1rem;
`;

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useThemeToggle();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Main>{children}</Main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
