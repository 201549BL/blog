import { useState } from "react";
import { lightTheme } from "../styles/themes/lightTheme";
import { darkTheme } from "../styles/themes/darkTheme";

const useThemeToggle = () => {
  const [themeBool, setTheme] = useState(false);
  const toggleTheme = () => setTheme((prev) => !prev);

  const theme = themeBool ? lightTheme : darkTheme;

  return [theme, toggleTheme];
};

export default useThemeToggle;
