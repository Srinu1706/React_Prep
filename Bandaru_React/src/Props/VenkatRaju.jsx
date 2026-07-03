import React, { useState } from "react";
import Srinivas from "./Srinivas";

const VenkatRaju = () => {

  const [name, setName] = useState("");


  const handleFunction = (incomingName) => {
    console.log(`Hello, name is coming from child component: ${incomingName}`);
    setName(incomingName);
  };

  return (
    <div>
     
      <Srinivas handleEvent={handleFunction} />
      
      
      <h1>Name: {name}</h1>
    </div>
  );
};

export default VenkatRaju;