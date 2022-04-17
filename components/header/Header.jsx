import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/Buttons";
import { HeaderContainer } from "../../styles/Header";
import Linkable from "../Linkable";
import ThemeToggleButton from "../ThemeToggleButton";
import UnderlineLogo from "./UnderlineLogo";
import { underline } from "../../styles/animations/underline";

const Header = ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <Linkable href={"/"} animation={() => underline()}>
        <UnderlineLogo />
      </Linkable>

      <ThemeToggleButton onClick={() => toggleTheme()} />
    </HeaderContainer>
  );
};

export default Header;
