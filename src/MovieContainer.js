import React from "react";
import "./MovieContainer.css";
import MovieCard from "./MovieCard";

const MovieContainer = ({ movieArray }) => {
  return (
    <div className="movie-container">
      {movieArray.map((movie) => {
        return (
          <MovieCard
            id={movie.id}
            poster_path={movie.poster_path}
            backdrop_path={movie.backdrop_path}
            title={movie.title}
            average_rating={movie.average_rating}
            release_date={movie.release_date}
          />
        );
      })}
    </div>
  );
};

export default MovieContainer;
