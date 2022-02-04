import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";
import MovieContainer from "./MovieContainer";
import Modal from "react-modal";
import MovieModal from "./MovieModal";
import getAllMovies from "./apiCalls"
Modal.setAppElement('#root')

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      error: false,
    };
  }

  componentDidMount = () => {
    const apiMovieData = getAllMovies()
    .then(({movies}) => this.setState({ movies }))
    .catch(() => this.setState({ error: true }))
   };

  unselectMovie = () => {
    this.setState({ ...this.state, selectedMovie: null });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.error ? <h1>Movies failed to load. Please contact Comcast.</h1> :
        <main>
          <Modal
            isOpen={this.state.selectedMovie !== null}
            onRequestClose={this.unselectMovie}
          >
            {this.state.selectedMovie !== null ? (
              <MovieModal movie={this.state.selectedMovie} />
            ) : (
              false
            )}
            <button onClick={this.unselectMovie}>❌</button>
          </Modal>
          <MovieContainer
            movieArray={this.state.movies}
            movieClicked={(movie) =>
              this.setState({ ...this.state, selectedMovie: movie })
            }
          />
        </main>}
      </div>
    );
  }
}

export default App;
