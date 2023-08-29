function getMovies() {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies`,
  )
    .then(resp => {
      
      if (resp.status >= 500 && !resp.status <= 599) {
        throw new Error('Oops! Something went wrong, try again later.');
      }
      if (resp.status === 404) {
        throw new Error('404: page not found');
      }
      console.log(resp)
      return resp.json();
    })
    // .then(data => {
    //   console.log('from api calls: all movie data', data.movies)
    //   return data.movie;
    // });
}

function getMovieDetails(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`,
  )
    .then(resp => {
      
      if (resp.status >= 500 && !resp.status <= 599) {
        throw new Error('Oops! Something went wrong, try again later.');
      }
      if (resp.status === 404) {
        throw new Error('404: page not found');
      }
      console.log('single movie response', resp)
      return resp.json();
    })
    // .then(data => {
    //   if (!id) {
    //     return data.movies;
    //   }
    //   console.log('from api calls: single movie data', data)
    //   return data.movie;
    // });
}

function getMovieTrailer(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`,
  )
    .then(resp => resp.json())
    .then(data => {
      if (!data.videos.length) {
        throw new Error('No trailer found.');
      }
      console.log(data)
      return data.videos.find(video => video.type === 'Trailer');
    });
}

export { getMovies, getMovieTrailer, getMovieDetails };
