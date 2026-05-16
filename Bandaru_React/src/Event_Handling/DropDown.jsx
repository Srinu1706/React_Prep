import React, { useState } from "react";

const DropDown = () => {
  const [city, setCity] = useState("");

// const city=document.getElementById("cities");

  const handleDropDown = (e_) => {
    setCity(e_.target.value);
    console.log(e_.target.value);
  };
  return (
    <div>
      <h2>City</h2>
      <select  id="cities" onChange={handleDropDown}>
        <option value="">Select a city</option>
        <option value="vizag">Vizag</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Hitech city">Hitech city</option>
        <option value="Chennai">chennai</option>
      </select>

      <h2>{city}</h2>
    </div>
  );
};

export default DropDown;
