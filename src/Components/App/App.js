import './App.scss';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import movieData from './movieData';
import { useState } from 'react';
import MovieDetails from '../MovieDetail/MovieDetail';
import ErrorPage from '../ErrorPage/ErrorPage';
import getMovies from '../../apiCalls';

function App() {
  const [movieDetails, setMovieDetails] = useState(false);

  const displayMovieDetails = id => {
    const movie = movieData.movies.find(movie => movie.id === id);
    setMovieDetails(movie);
  };

  getMovies()

  const backToHomePage = () => {
    setMovieDetails(false);
  };
  const error = false;

  return (
    <div className='App'>
      <Header />
      {error && <ErrorPage />}

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
