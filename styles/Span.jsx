import styled from "styled-components";

export const Span = styled.span`
  color: ${({ color, theme }) => color || theme?.colors?.font};

  &::before,
  &::after {
    background-color: ${({ color, theme }) => color || theme?.colors?.font};
  }
`;
