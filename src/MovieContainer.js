import React from "react";
import "./MovieContainer.css";
import MovieCard from "./MovieCard";

const MovieContainer = ({ movieArray, movieClicked }) => {
  return (
    <div className="movie-container">
      {movieArray.map((movie) => {
        return (
          <MovieCard
            onClick={() => movieClicked(movie)}
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            backdrop_path={movie.backdrop_path}
            title={movie.title}
            average_rating={Math.ceil(movie.average_rating / 2)}
            release_date={movie.release_date}
          />
        );
      })}
    </div>
  );
};

export default MovieContainer;
