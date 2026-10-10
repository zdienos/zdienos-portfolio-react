import { useEffect, useState } from "react";
import { PreviewContext, ThemeContext } from "./contexts";

function readTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export function Providers({ children }) {
  const [theme, setTheme] = useState(readTheme);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // storage can be unavailable (private mode); the theme still applies
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <PreviewContext value={{ preview, setPreview }}>{children}</PreviewContext>
    </ThemeContext>
  );
}
