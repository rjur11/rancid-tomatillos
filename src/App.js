import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";
import MovieContainer from "./MovieContainer";
import Modal from "react-modal";
import MovieModal from "./MovieModal";
import { getAllMovies } from "./apiCalls";
import { Link } from "react-router-dom";
import Loader from "./Loader";

Modal.setAppElement("#root");

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      error: false,
      isLoading: true,
    };
  }

  componentDidMount = () => {
    const apiMovieData = getAllMovies()
      .then(({ movies }) => this.setState({ movies }))
      .catch(() => this.setState({ error: true }));
    this.setState({ isLoading: false });
  };

  unselectMovie = () => {
    this.setState({ ...this.state, selectedMovie: null });
  };

  render() {
    const movie = this.state.movies.find(
      (movie) => `${movie.id}` === this.props.match.params.movieId
    );
    console.log(movie);
    return (
      <div className="App">
        <NavBar />
        {this.state.error ? (
          <h1>Movies failed to load. Please contact Comcast.</h1>
        ) : (
          <main className="main">
            {this.state.isLoading ? (
              <div className="loader-container">
                <Loader />
              </div>
            ) : (
              <MovieContainer
                movieArray={this.state.movies}
                movieClicked={(movie) =>
                  this.setState({ selectedMovie: movie })
                }
              />
            )}

            <Modal
              className="Modal"
              overlayClassName="Overlay"
              isOpen={this.props.match.params.movieId !== undefined}
              onRequestClose={this.unselectMovie}
            >
              {this.props.match.params.movieId &&
              this.state.movies.length > 0 ? (
                <MovieModal movie={movie} />
              ) : (
                false
              )}
              <Link className="exit-modal" to="/">
                ✕
              </Link>
            </Modal>
            {/* <MovieContainer
              movieArray={this.state.movies}
              movieClicked={(movie) => this.setState({ selectedMovie: movie })}
            /> */}
          </main>
        )}
      </div>
    );
  }
}

export default App;
