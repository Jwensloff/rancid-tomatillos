function getMovies() {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`).then(
    (resp) => {
      if (resp.status >= 500 && !resp.status <= 599) {
        throw new Error('Oops! Something went wrong, try again later.');
      }
      if (resp.status === 404) {
        throw new Error('404: page not found');
      }
      return resp.json();
    }
  );
}

function getMovieDetails(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${3}`
  ).then((resp) => {
    if (resp.status >= 500 && !resp.status <= 599) {
      throw new Error('Oops! Something went wrong, try again later.');
    }
    if (resp.status === 404) {
      throw new Error('404: page not found');
    }
    return resp.json();
  });
}

function getMovieTrailer(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if (!data.videos.length) {
        throw new Error('No trailer found.');
      }
      return data.videos.find((video) => video.type === 'Trailer');
    });
}

export { getMovies, getMovieTrailer, getMovieDetails };
