import React from "react";
import { useEffect, useRef } from "react";

const Demo3 = () => {
  const fileRef = React.useRef();

  const OpenFile = () => {
    fileRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={fileRef}
        style={{
          display: "none",
        }}
      />

      <button onClick={OpenFile}>Open File</button>
    </div>
  );
};

export default Demo3;
