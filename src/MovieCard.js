import React from "react";
import "./MovieCard.css";

const MovieCard = ({
  onClick,
  id,
  poster_path,
  backdrop_path,
  title,
  average_rating,
  release_date,
}) => {
  return (
    <section className="movie-preview-card" onClick={onClick}>
      <img className="movie-card-image" src={poster_path} alt={title} />
      <div className="movie-preview-card-info">
        <h2>{title}</h2>
        <div className="bottom-info">
          <div className="rating">
            <h3>Rating:</h3>
            <h3>{average_rating} </h3>
          </div>
          <div className="release-date">
            <h3>Release:</h3>
            <h3>{release_date.substring(0, 4)}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
