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
      searchedText: "",
    };
  }

  componentDidMount = () => {
    const apiMovieData = getAllMovies()
      .then(({ movies }) => this.setState({ movies, isLoading: false }))
      .catch(() => this.setState({ error: true }));
  };

  unselectMovie = () => {
    this.setState({ ...this.state, selectedMovie: null });
  };

  getSearchedMovies = () => {
    if (this.state.searchedText === "") {
      return this.state.movies;
    }
    return this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.searchedText.toLowerCase())
    );
  };

  render() {
    const movie = this.state.movies.find(
      (movie) => `${movie.id}` === this.props.match.params.movieId
    );
    console.log(movie);
    return (
      <div className="App">
        <NavBar
          onChange={(event) =>
            this.setState({ searchedText: event.target.value })
          }
        />
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
                movieArray={this.getSearchedMovies()}
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
          </main>
        )}
      </div>
    );
  }
}

export default App;
