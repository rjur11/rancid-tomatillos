import React from "react";
import "./MovieCard.css";
import RatingDisplay from "./RatingDisplay";
import { Link } from "react-router-dom";

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
    <Link to={`/${id}`}>
      <section className="movie-preview-card">
        <img className="movie-card-image" src={poster_path} alt={title} />
        <div className="movie-preview-card-info">
          <div className="bottom-info">
            <div className="rating">
              <h2 className="rating-text">Rating:</h2>
              <RatingDisplay
                className="tomatillo-ratings"
                rating={average_rating}
              />
            </div>
            <div className="release-date">
              <h2 className="release-date-value">Release:</h2>
              <h3 className="release-date-year">{release_date.substring(0, 4)}</h3>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default MovieCard;
