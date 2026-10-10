import { useEffect, useState } from "react";
import { ThemeContext } from "./theme";

function readTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    // Browser chrome (address bar, PWA title bar) follows the paper colour
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#111111" : "#ecebe3");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // storage can be unavailable (private mode); the theme still applies
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}
