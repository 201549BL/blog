import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav``;

const Toc = ({ children }) => {
  return <StyledNav>{children}</StyledNav>;
};

export default Toc;
