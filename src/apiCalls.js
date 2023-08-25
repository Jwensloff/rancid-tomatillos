 function getMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(resp => resp.json())
    .then(data => data.movies)
}

export default getMovies