import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
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
`;

const Toc = ({ children }) => {
  return <StyledNav>{children}</StyledNav>;
};

export default Toc;
