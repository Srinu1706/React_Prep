import React from "react";
import { useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
  //   const loc = useLocation();
  const parm = useParams();
  console.log(parm);
  return (
    <div>
      <h1>Movie Details</h1>
      {/* <h2>ID : {loc.state.id}</h2>
      <h2>Movie name : {loc.state.movieName}</h2>
      <h2> Movie Director: {loc.state.Director} </h2>
      <h2> Industry: {loc.state.Industry} </h2>
      <h2> Language: {loc.state.Language} </h2> */}
    </div>
  );
};

export default MovieDetails;
