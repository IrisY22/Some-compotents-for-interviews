import { UseLocalStorage } from "./useLocalStorage";
import "./theme.css";

export function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Hello World!</h1>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
