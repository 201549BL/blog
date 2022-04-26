import styled from "styled-components";
import { spacer } from "./utils/spacer";
import { dracula } from "./highlight/dracula.jsx";
import { boxShadow } from "./utils/boxShadow";

export const PostContainer = styled.article`
  position: relative;
  display: grid;

  grid-template-columns: repeat(12, 1fr);

  width: 100%;
  max-width: 70rem;

  gap: 1rem;
  margin: 0 auto;

  header {
    grid-row: 1;
    grid-column: 1 / -1;

    nav {
      position: sticky;
      top: 6rem;

      background-color: ${({ theme }) =>
        theme?.colors?.background ?? "var(--color-background)"};

      border: 0.1rem solid ${({ theme }) => theme?.colors?.border};
      border-radius: var(--border-radius-md);
      padding: 1rem;

      li {
        display: flex;

        a {
          font-size: 16px;
          flex-shrink: 0;
        }
      }
    }

    @media (min-width: 32rem) {
      grid-column: 2 / 12;
    }

    @media (min-width: 70rem) {
      grid-column: 10 / -1;
    }
  }

  main {
    grid-row: 2;
    grid-column: 1 / 13;

    padding: 2rem;
    margin-bottom: 10rem;

    background-color: ${({ theme }) =>
      theme?.colors?.background ?? "var(--color-background)"};

    border: 0.1rem solid ${({ theme }) => theme?.colors?.border};
    border-radius: var(--border-radius-md);

    ${boxShadow("lg")};

    ${spacer()};

    ${dracula};

    @media (min-width: 32rem) {
      grid-row: 2;
      grid-column: 2 / 12;
    }

    @media (min-width: 70rem) {
      grid-row: 1;
      grid-column: 1 / 10;
    }
  }
`;
