import React from 'react'

const NavigateToTop = () => {
    const navigateTop = React.useRef();

    const handleScroll = () => {
        navigateTop.current.scrollIntoView({behavior:"smooth"})
    }   
  return (
    <div>
      <div ref={navigateTop} style={{
        "height": "500px",
        "width":"1000px",
        "backgroundColor":"red",
        "border":"1px solid black",
        "display":'flex',
        "justifyContent":"center",
         "alignItems":"center",
      }}>  Java-meme_Club </div>

      <div style={{
        "height": "500px",
        "width":"1000px",
        "backgroundColor":"Green",
        "border":"1px solid black",
      }}>
        I am Srinivas
      </div>

      <div style={{
        "height": "500px",
        "width":"1000px",
        "backgroundColor":"yellow",
        "border":"1px solid black",
         "display":'flex',
            "justifyContent":"center",
            "alignItems":"center",
      }}>
        <button onClick={handleScroll} style={{
           
            "width":"100px",
            "height":"50px",
            "backgroundColor":"blue",
        }}>
          Navigate to Top
        </button>
      </div>
    </div>
  )
}

export default NavigateToTop
