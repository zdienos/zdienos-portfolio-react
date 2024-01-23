import React, { useState, useEffect } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const DarkModeToggle = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(false);
    }
  };

  return (
    <label aria-label="floating-label" className="float">
      <input
        aria-label="floating"
        className="toggle-checkbox"
        type="checkbox"
        defaultChecked={checked}
        onChange={() => toggleThemeChange()}
      ></input>
      <div className="toggle-slot">
        <div className="moon-icon-wrapper">
          <BsFillSunFill className="sun-icon" />
        </div>
        
        <div className="sun-icon-wrapper">
          <div className="bi bi-moon"></div>
          <BsFillMoonFill className="moon-icon" />
        </div>
      </div>
    </label>
  );
};

export default DarkModeToggle;
