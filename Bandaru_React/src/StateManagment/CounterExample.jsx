import React from "react";
import { useState } from "react";
const CounterExample = () => {
//   let initalvalue = 0;
  const [count, setcount] = useState(0);
  const incrnment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
    if (count <= 0) {
      setcount(0);
    }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrnment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterExample;
