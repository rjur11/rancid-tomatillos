import React, { Component } from "react";
import "./MovieModal.css";
import { getSingleMovie, getSingleMovieVideo } from "./apiCalls";
import RatingDisplay from "./RatingDisplay";
import ReactPlayer from "react-player";

class MovieModal extends Component {
  constructor({ movie }) {
    super();
    this.state = {
      movie: movie,
      fullMovie: null,
      error: false,
      videoKey: "",
    };
  }

  componentDidMount() {
    if (!this.state.movie) {
      return;
    }
    getSingleMovie(this.state.movie.id)
      .then(({ movie }) => {
        this.setState({ fullMovie: movie });
      })
      .catch((error) => this.setState({ error: true }));
    getSingleMovieVideo(this.state.movie.id)
      .then((result) => this.setState({ videoKey: result.videos[0].key }))
      .catch((error) => this.setState({ error: true }));
  }

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
        <h2 className="movie-modal-title">{this.state.movie.title}</h2>
        <div className="media-player">
          <ReactPlayer
            url={`https://www.youtube.com/embed/${this.state.videoKey}`}
            className="video-trailer"
            controls={true}
            playing={true}
            light={this.state.movie.backdrop_path}
          />
        </div>

        <div className="movie-modal-information">
          <div className="left-side">
            <h3 className="runtime-value">
              Runtime:{" "}
              <span className="section-info">
                {this.state.fullMovie.runtime
                  ? `${this.state.fullMovie.runtime} minutes`
                  : "Information not available"}
              </span>
            </h3>
            <h3 className="release-date-value">
              Release:{" "}
              <span className="section-info">
                {this.state.movie.release_date.substring(0, 4)}
              </span>
            </h3>
            <h3 className="description-value">
              Description:{" "}
              <span className="section-info">
                {this.state.fullMovie.overview
                  ? this.state.fullMovie.overview
                  : "Information not available"}
              </span>
            </h3>
          </div>
          <div className="right-side">
            <h3>
              Rating:{" "}
              <RatingDisplay
                rating={parseInt(
                  Math.ceil(this.state.movie.average_rating / 2)
                )}
              />{" "}
            </h3>
            <h3 className="genre-value">
              Genre:{" "}
              <span className="section-info">
                {this.state.fullMovie.genres
                  ? this.state.fullMovie.genres.join(", ")
                  : "Information not available"}
              </span>
            </h3>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <>
        {this.state.error || !this.state.movie ? (
          <div className="modal-failed-to-load-error">
            <h1>Movie data failed to load. Please contact Comcast.</h1>
          </div>
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
