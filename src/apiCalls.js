const getAllMovies = async () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  // .then(movies => this.setState({ movies }))
  // .catch(() => this.setState({ error: true }))
}

export default getAllMovies;