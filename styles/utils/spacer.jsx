import { css } from "styled-components";

export const spacer = (m = 2) => css`
  & > *:not(:last-child) {
    margin-bottom: calc(var(--font-size-p) * ${m});
  }
`;
