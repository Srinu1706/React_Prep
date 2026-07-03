import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import React from "react";
import Demo1 from "./Routing/Demo1";
import Demo2 from "./Routing/Demo2";
import MovieDetails from "./Routing/MovieDetails";
import Movies from "./Routing/Movies";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Movies></Movies>}></Route>
      <Route path="MovieDetails" element={<MovieDetails></MovieDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
