import styled from "styled-components";
import { css } from "styled-components";

export const LinkableContainer = styled.div`
  cursor: pointer;
  border-radius: var(--border-radius-md);

  ${({ nowrap }) =>
    nowrap &&
    css`
      white-space: nowrap;
      overflow: hidden;
    `}

  ${({ animation }) => (animation ? animation() : "")}
`;
