import styled from "styled-components";
import { boxShadow } from "./utils/boxShadow";
import { spacer } from "./utils/spacer";
import { dracula } from "./highlight/dracula";

export const StyledPostMain = styled.main`
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
`;
