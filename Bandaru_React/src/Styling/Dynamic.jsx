import React from "react";

const Dynamic = () => {
  let name = "sai";

  let isLoginedIn = true;

  let loginStyle = {
    backgroundColor: "Green",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    height: "250px",
    width: "250px",
  };

  let logoutStyle = {
    backgroundColor: "Red",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    height: "250px",
    width: "250px",
  };
  return (
    <div>
      <h1 style={isLoginedIn ? loginStyle : logoutStyle}>
        {isLoginedIn ? `Welcome ${name}` : "Please Login"}
      </h1>
    </div>
  );
};

export default Dynamic;
