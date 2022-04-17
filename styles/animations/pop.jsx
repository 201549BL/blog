import { css } from "styled-components";
import { Logo } from "../../components/Header/UnderlineLogo";

export const pop = () => css`
  & {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    outline: 0.1rem solid transparent;
  }

  &:hover {
    outline: 0.15rem solid
      ${({ theme }) =>
        theme?.colors?.primarySelected ?? "var(--color-primary-selected)"};

    outline-offset: 0.2rem;
  }
`;
