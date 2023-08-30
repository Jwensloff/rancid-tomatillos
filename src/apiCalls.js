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
      // console.log(resp)
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
      // console.log('single movie response', resp)
      return resp.json();
    })
    .then(data => {
  
      // console.log('from api calls: single movie data', data)
      return data;
    });
}

function getMovieTrailer(id) {
  // console.log('THE ID BEING PASSED INTO THE FETCH API', id)
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`,
  )
    .then(resp => {
      // console.log('TRAILER RESP',resp)
      return resp.json()})
    .then(data => {
      console.log('trailer data',data)
      // if (!data.videos.length) {
      //   throw new Error('No trailer found.');
      // }
      return data.videos
      .find(video => video.type === 'Trailer');
      // console.log('TRAILER DATA',test)
      // return test
    });
}

export { getMovies, getMovieTrailer, getMovieDetails };
