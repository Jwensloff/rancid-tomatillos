 function getMovies(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id || ''}`)
    .then(resp => resp.json())
    .then(data => {
      if (!id) {
        return data.movies
      }
      return data.movie
    })
}

export default getMovies