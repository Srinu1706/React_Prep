import React from "react";
import { useState } from "react";
import "./Rating.css";

const Rating = () => {
  const [rate, SetRate] = useState(0);
  const stars = [1, 2, 3, 4, 5, ];

  return <div>
    <h2>Rate the : java_Meme_clube_Page:</h2>
    {
        stars.map((star) => {
            return (
                <span
                    key={star}
                    className={star <= rate ? "filled" : "empty"}
                    onClick={() => SetRate(star)}
                >
                   
                    &#9733;
                </span>
                
            );
        })
    }
     <h2>Your Rating: {rate}</h2>
  </div>;
};

export default Rating;
