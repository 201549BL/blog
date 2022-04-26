import { createGlobalStyle } from "styled-components";
import { underline } from "./animations/underline";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    line-height: 1.5;
    --color-primary: #8cd0f0;
    --color-primary-selected: #a3daf3;
    --color-font: #0c2f3f;
    --color-background: #fff;
    --color-body: #ffc6ce;
    --color-link: purple;

    --border-radius-md: 1rem;
    --border-radius-sm: 0.3rem;
    --font-size-p: clamp(0.875rem,  calc(1vw + 0.7rem), 1.3rem);
  }

  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background-color: ${({ theme }) =>
      theme?.colors?.body ?? "var(--color-body)"};

    color: ${({ theme }) => theme?.colors?.font ?? "var(--color-font)"};

    h1 {
      font-size: clamp(1.5rem,  calc(1vw + 1.5rem), 3rem);
    }

    h2 {
      font-size: clamp(1.25rem,  calc(1vw + 1.25rem), 2.75rem);
    }

    h3 {
      font-size: clamp(1rem,  calc(1vw + 1rem), 2.5rem);

    }

    p {
      font-size: var(--font-size-p);
    }

    a {
      color: ${({ theme }) => theme?.colors?.primary ?? "purple"};
      
      text-decoration: none;
      font-weight: 400;     
    }

    header a {
      color: ${({ theme }) => theme?.colors?.font ?? "var(--color-font)"};
    }

    ul, ol  {
      font-size: var(--font-size-p);
      padding-left: 1.5rem;
    }
  }
`;

export default GlobalStyle;
