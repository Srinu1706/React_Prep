import React from 'react';

const Srinivas = ({ handleEvent }) => {
  return (
    <div>
      <button onClick={() => handleEvent("Srinivas")}>
        CLICK ME
      </button>
    </div>
  );
};

export default Srinivas;