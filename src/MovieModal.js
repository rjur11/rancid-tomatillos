import React from "react";
import "./MovieModal.css";

const MovieModal = ({ movie }) => {
  return (
    <section className="movie-preview-card">
      <img
        className="movie-card-image"
        src={movie.backdrop_path}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <h3>Avg. Rating: {movie.average_rating.toFixed(1)} </h3>
      <h4>Year of Release: {movie.release_date.substring(0, 4)}</h4>
    </section>
  );
};

export default MovieModal;
