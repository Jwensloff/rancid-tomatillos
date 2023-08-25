import './App.scss';
import Header from '../Header/Header';
import MoviePoster from '../MoviePoster/MoviePoster';
import Homepage from '../Homepage/Homepage';
import movieData from './movieData';
import { useState } from 'react';
import MovieDetails from '../MovieDetail/MovieDetail';

function App() {
  const [movieDetails, setMovieDetails] = useState(false);

  const displayMovieDetails = id => {
    const movie = movieData.movies.find(movie => movie.id === id);
    setMovieDetails(movie);
  };

  const backToHomePage = () => {
    setMovieDetails(false);
  };

  return (
    <div className='App'>
      <Header />
      {movieDetails ? (
        <MovieDetails
          movieDetails={movieDetails}
          backToHomePage={backToHomePage}
        />
      ) : (
        <Homepage
          movies={movieData.movies}
          displayMovieDetails={displayMovieDetails}
        />
      )}
    </div>
  );
}

export default App;
