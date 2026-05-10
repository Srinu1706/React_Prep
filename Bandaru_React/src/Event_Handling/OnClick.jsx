import React, { useState } from 'react'

const OnClick = () => {
    const [message,setMessage]=useState("");
    const handleClick=()=>{
        console.log("Button Clicked");
        setMessage("Button was clicked!");
    }
  return (

    
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
    </div>
  )
}

export default OnClick
