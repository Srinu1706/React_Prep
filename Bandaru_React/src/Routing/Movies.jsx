import React from "react";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const nav = useNavigate();

  const handleNavigate = (mov) => {
    nav(`/MovieDetails/${mov.id}`);
  };

  const movie = [
    {
      id:1,
      movieName: "The Odessey",
      Director: "Christofer Nolan",
      Industry: "HollyWood",
      Language: "English",
    },
    {
      id:2,
      movieName: "The Shakti",
      Director: "Mehar Nolan",
      Industry: "TollyWood",
      Language: "Telugu",
    },
  ];
  return (
    <div>
      {movie.map((mov) => {
        return (
          <>
            <h1>{mov.movieName}</h1>
            <button onClick={() => handleNavigate(mov)}>Navigate</button>
          </>
        );
      })}
    </div>
  );
};

export default Movies;
