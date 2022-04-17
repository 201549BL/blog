import styled from "styled-components";

export const LinkableContainer = styled.div`
  cursor: pointer;
  border-radius: var(--border-radius-md);

  & > * {
    ${({ animation }) => (animation ? animation() : "")}
  }
`;
