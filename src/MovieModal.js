import React from "react";
import "./MovieModal.css";

const MovieModal = ({ movie }) => {
  return (
    <section className="movie-modal-preview-card">
      <img
        className="movie-modal-card-image"
        src={movie.backdrop_path}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <div className="movie-modal-information">

        <div className="left-side">
          <h3>Runtime: TIME GOES HERE </h3>
          <h3>Release: {movie.release_date.substring(0, 4)}</h3>
          <h3>Description: SOMETHING GOES HERE</h3>
        </div>
        <div className="right-side">
          <h3>Rating: {movie.average_rating.toFixed(1)} </h3>
          <h3>Genre: GENRE GOES HERE </h3>
        </div>
      </div>
    </section>
  );
};

export default MovieModal;
