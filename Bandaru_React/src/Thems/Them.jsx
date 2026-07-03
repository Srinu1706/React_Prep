import React, { useState } from "react";
import "./Them.css";

const Them = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      <>
        <p>Welecome to java_meme_Club</p>
      </>
    </div>
  );
};

export default Them;
