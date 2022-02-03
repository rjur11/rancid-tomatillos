import React from "react";
import "./MovieCard.css";

const MovieCard = ({
  id,
  poster_path,
  backdrop_path,
  title,
  average_rating,
  release_date,
}) => {
  return (
    <section className="movie-preview-card">
      <img className="movie-card-image" src={poster_path} alt={title} />
      <h2>{title}</h2>
      <h3>Avg. Rating: {average_rating.toFixed(1)} </h3>
      <h4>Year of Release: {release_date.substring(0, 4)}</h4>
    </section>
  );
};

export default MovieCard;
