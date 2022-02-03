import logo from "./logo.svg";
import "./App.css";
import movieData from "./movieData";

function App() {
  return (
    <div className="App">
      <nav className="navigation-bar">
        <div className="logo">Rancid<span className="green">Tomatillos</span></div>
        <div className="search-bar">
          <input className="text-box" placeholder="Search Movies"></input>
          <button className="search-button">🔎</button>
        </div>
      </nav>
      <main>
        <div className="movie-container">
          <section className="movie-preview-card">
            IMAGE<br />
            TITLE <br />
            STATS<br />
          </section>
          <section className="movie-preview-card">
            IMAGE<br />
            TITLE <br />
            STATS<br />
          </section>
          <section className="movie-preview-card">
            IMAGE<br />
            TITLE <br />
            STATS<br />
          </section>
        </div>
      </main>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
