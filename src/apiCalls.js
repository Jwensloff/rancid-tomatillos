 
 
 function getMovies(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id || ''}`)
    .then(resp =>{
      return resp.json()
    })
    .then(data => {
      if (!id) {
        return data.movies
      }
      return data.movie
    })
}

function getMovieTrailer(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      if(!data.videos.length) {
        throw new Error ('No trailer found.')
      }
      return data.videos.find(video => video.type=== "Trailer")
    })
}

export { getMovies, getMovieTrailer }

