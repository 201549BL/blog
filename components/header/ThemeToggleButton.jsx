import React from "react";
import { Button } from "../../styles/Buttons";
import {
  IoSunnyOutline,
  IoSunny,
  IoMoonOutline,
  IoMoon,
} from "react-icons/io5";
import { Icon } from "../../styles/Icon";
import { useTheme } from "styled-components";

const renderIcon = (type) => {
  return type === "dark" ? <IoSunny /> : <IoMoon />;
};
const ThemeToggleButton = ({ onClick }) => {
  const { type } = useTheme();

  return (
    <Button name="Toggle darkmode" onClick={onClick}>
      <Icon>{renderIcon(type)}</Icon>
    </Button>
  );
};

export default ThemeToggleButton;
