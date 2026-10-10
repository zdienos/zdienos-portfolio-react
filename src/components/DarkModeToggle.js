import React, { useState, useEffect } from "react";

function initialTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  return current === "dark" ? "dark" : "light";
}

const DarkModeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`group flex items-center justify-between gap-3 bg-paper px-3 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-ink hover:text-paper ${className}`}
    >
      <span className="relative h-5 w-5 overflow-hidden rounded-full border-2 border-current">
        <span className="absolute inset-y-0 left-0 w-1/2 bg-current" />
      </span>
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
};

export default DarkModeToggle;
