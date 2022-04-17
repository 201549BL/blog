import { css } from "styled-components";

export const spacer = () => css`
  & > *:not(:last-child) {
    margin-bottom: calc(var(--font-size-p) * 2);
  }
`;
