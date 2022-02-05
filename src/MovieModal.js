import React, { Component } from "react";
import "./MovieModal.css";
import { getSingleMovie } from "./apiCalls";
import tomatillo from "./blackfilled.png";
import emptyTomatillo from "./whiteclear.png";

class MovieModal extends Component {
  constructor({ movie }) {
    super();
    this.state = {
      movie: movie,
      fullMovie: null,
      error: false,
    };
  }

  componentDidMount() {
    getSingleMovie(this.state.movie.id)
      .then(({ movie }) => {
        console.log(movie);
        this.setState({ fullMovie: movie });
      })
      .catch((error) => this.setState({ error: true }));
  }

  renderTomatillos = (rating) => {
    return [...Array(rating)].map((e, i) => (
      <img src={tomatillo} className="tomatillo" />
    ));
  };

  renderEmptyTomatillos = (rating) => {
    return [...Array(5 - rating)].map((e, i) => (
      <img src={emptyTomatillo} className="empty-tomatillo" />
    ));
  };

  renderLoading() {
    return (
      <section className="movie-modal-preview-card">
        <h3>Loading movie data...</h3>
      </section>
    );
  }

  renderBigMovie() {
    return (
      <section className="movie-modal-preview-card">
        <img
          className="movie-modal-card-image"
          src={this.state.movie.backdrop_path}
          alt={this.state.movie.title}
        />
        <h2 className="movie-modal-title">{this.state.movie.title}</h2>
        <div className="movie-modal-information">
          <div className="left-side">
            <h3>
              Runtime:{" "}
              {this.state.fullMovie.runtime
                ? `${this.state.fullMovie.runtime} minutes`
                : "Information not available"}
            </h3>
            <h3>Release: {this.state.movie.release_date.substring(0, 4)}</h3>
            <h3>
              Description:{" "}
              {this.state.fullMovie.overview
                ? this.state.fullMovie.overview
                : "Information not available"}
            </h3>
          </div>
          <div className="right-side">
            <h3>
              Rating:{" "}
              {this.renderTomatillos(
                parseInt(Math.ceil(this.state.movie.average_rating / 2))
              )}
              {this.renderEmptyTomatillos(
                parseInt(Math.ceil(this.state.movie.average_rating / 2))
              )}{" "}
            </h3>
            <h3>
              Genre:{" "}
              {this.state.fullMovie.genres.name
                ? this.state.fullMovie.genres.join(", ")
                : "Information not available"}
            </h3>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <>
        {this.state.error ? (
          <h1>Movies failed to load. Please contact Comcast.</h1>
        ) : this.state.fullMovie !== null ? (
          this.renderBigMovie()
        ) : (
          this.renderLoading()
        )}
      </>
    );
  }
}

export default MovieModal;
