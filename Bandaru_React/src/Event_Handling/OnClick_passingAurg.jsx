import React from 'react'
import { useState } from 'react'
const OnClick_passingAurg = () => {
    const [color,setColor]=useState("");
    const [name,Setname]=useState("")
    const handleClick=(color)=>{
        console.log(color)
        setColor(color);
    }

    const handleInput=(e)=>{
        console.log(`Hi ${name}`)
        Setname(e.target.value);
    }

    const ShowName =()=>{
        console.log(`Hi ${name}`)
    }

  return (
    <div>
      <button onClick={()=>{handleClick("Red")}}>Red</button>
      <button onClick={()=>{handleClick("Green")}}>Green</button>
      <h1>{color}</h1>

      <input type="text" onChange={handleInput} />
      <button onClick={ShowName}>click to see name</button> 
        <h1>{name}</h1>
    </div>
    
  )
}

export default OnClick_passingAurg
// <button onClick={handleClick("Red")}> then function runs immediately when page loads. To avoid this we use arrow function and pass the function as a callback.