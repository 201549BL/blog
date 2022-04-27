import React from "react";
import styled from "styled-components";
import { spacer } from "../../styles/utils/spacer";

const StyledNav = styled.nav`
  position: sticky;
  top: 6rem;

  background-color: ${({ theme }) =>
    theme?.colors?.background ?? "var(--color-background)"};

  border: 0.1rem solid ${({ theme }) => theme?.colors?.border};
  border-radius: var(--border-radius-md);
  padding: 1rem;

  ul {
    padding-inline: 0;

    ${spacer(0.5)}

    .h1 {
    }

    .h2 {
      padding-left: 1rem;
    }

    .h3 {
      padding-left: 2rem;
    }
  }

  li {
    display: flex;
    position: relative;

    a {
      position: relative;
      font-size: 16px;
      a::before {
        position: absolute;
        left: -2rem;
        content: "-";
        z-index: 1;
      }
    }
  }
`;

const Toc = ({ children }) => {
  return <StyledNav>{children}</StyledNav>;
};

export default Toc;
