import { useContext, useEffect } from "react";
import ThemeContext from "./themeContext";

const ThemeSwticher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.classList.toggle("dark", theme);
  }, [theme]);
  return (
    <>
      <button onClick={toggleTheme}>Change Theme</button>
      <h1>ThemeSwticher {theme ? "Dark" : "Light"}</h1>
    </>
  );
};

export default ThemeSwticher;
