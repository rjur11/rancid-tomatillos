import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import movieData from "./movieData";
import MovieCard from "./MovieCard";
import MovieContainer from "./MovieContainer";
import Modal from "react-modal";
import MovieModal from "./MovieModal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
    };
  }

  componentDidMount = () => {
    const moviesData = movieData.movies.map((movie) => {
      return {
        id: movie.id,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
        title: movie.title,
        average_rating: movie.average_rating,
        release_date: movie.release_date,
      };
    });
    this.setState({ movies: [...moviesData], selectedMovie: null });
  };

  unselectMovie = () => {
    this.setState({ ...this.state, selectedMovie: null });
  };

  render() {
    return (
      <div className="App">
        {console.log(this.state)}
        {console.log(this.state.movies[0])}
        <NavBar />
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
        </main>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    );
  }
}

export default App;
