import { useSelector, useDispatch } from "react-redux";
import { handleToggle } from "./store/ThemeSwitcher";

const Theme = () => {
  const themeChange = useSelector((state) => state.theme.toggleTheme);

  const dispatch = useDispatch();

  return (
    <div>
      <p>{themeChange ? "Dark Mode" : "Light Mode"}</p>

      <button onClick={() => dispatch(handleToggle())}>Toggle Theme</button>
    </div>
  );
};

export default Theme;
