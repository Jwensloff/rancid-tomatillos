import './App.scss';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import { useEffect, useState } from 'react';
import MovieDetails from '../MovieDetail/MovieDetail';
import ErrorPage from '../ErrorPage/ErrorPage';
import getMovies from '../../apiCalls';

function App() {
  const [movieDetails, setMovieDetails] = useState(false);
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
   getMovies().then(data => setMovies(data))
  }, [])

  const displayMovieDetails = id => {
    const movie = movies.find(movie => movie.id === id);
    setMovieDetails(movie);
  };

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
          movies={movies}
          displayMovieDetails={displayMovieDetails}
        />
      )}
    </div>
  );
}

export default App;
