import React from 'react'

const Stylee = () => {

  let isloggedIn = false;

  let style1={
       backgroundColor:"Green",
        color:"white",
        padding:"20px",
        borderRadius:"10px",
        textAlign:"center",
        height:"50px",
        width:"50px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }

    let style2={
       backgroundColor:"Red",
        color:"white",
        padding:"20px",
        borderRadius:"10px",
        textAlign:"center",
        height:"50px",
        width:"50px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
  return (
    <div style={isloggedIn?style1:style2}>
      <h2 >Inline  Style</h2>
    </div>
  )
}

export default Stylee
