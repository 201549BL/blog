import styled from "styled-components";
import { boxShadow } from "./utils/boxShadow";
import { spacer } from "./utils/spacer";
import { dracula } from "./highlight/dracula";
import { LinkableContainer } from "./Linkable";

export const StyledPostMain = styled.main`
  grid-row: 2;
  grid-column: 1 / 13;

  padding: 1rem;
  margin-bottom: 10rem;

  background-color: ${({ theme }) =>
    theme?.colors?.background ?? "var(--color-background)"};

  border: 0.1rem solid ${({ theme }) => theme?.colors?.border};
  border-radius: var(--border-radius-md);

  h1,
  h2,
  h3 {
    ${LinkableContainer} {
      position: relative;

      &::before {
        position: absolute;
        left: -1.7rem;

        content: "# ";
        visibility: hidden;
      }

      &:hover {
        &::before {
          visibility: visible;
        }
      }

      &::after {
        content: unset;
      }
    }
  }

  ${boxShadow("lg")};

  ${spacer()};

  ${dracula};

  @media (min-width: 32rem) {
    padding: 2rem;
    grid-row: 2;
    grid-column: 2 / 12;
  }

  @media (min-width: 70rem) {
    padding: 2rem;
    grid-row: 1;
    grid-column: 1 / 10;
  }
`;
