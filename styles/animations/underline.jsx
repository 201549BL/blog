import { css } from "styled-components";

export const underline = (color) => css`
  & {
    position: relative;
    z-index: 0;
  }

  &::after {
    background-color: ${({ theme }) =>
      (color || theme?.colors?.font) ?? "var(--color-font)"};

    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    margin-bottom: -0.3em;

    height: 0.15em;
    width: 100%;

    transition: 200ms ease;

    transform: scaleX(0);
    transform-origin: left;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
