import './App.scss';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import { useEffect, useState } from 'react';
import MovieDetails from '../MovieDetail/MovieDetail';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getMovies, getMovieTrailer } from '../../apiCalls';
import Trailer from '../Trailer/Trailer';

function App() {
  const [onHomepage, setOnHomepage] = useState(true);
  const [individualMovie, setindividualMovie] = useState(false);
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [onWatchTrailer, setOnWatchTrailer] = useState(false);
  const [error, setError] = useState(false);
  const [hasTrailer, setHasTrailer] = useState(true);

  useEffect(() => {
    getMovies()
      .then(data => setMovies(data))
      .catch(error => setError(true));
  }, []);

  const displayMovieDetails = id => {
    setOnHomepage(false);
    getMovies(id, setError)
      .then(data => setindividualMovie(data))
      .catch(error => setError(true));
    getMovieTrailer(id)
      .then(data => {
        setHasTrailer(true)
        return setTrailer(data);
      })
      .catch(error => setHasTrailer(false));
    setOnWatchTrailer(false);
  };

  const backToHomePage = () => {
    setindividualMovie(false);
    setOnHomepage(true);
    setOnWatchTrailer(false);
  };

  const displayTrailer = () => {
    setOnWatchTrailer(true);
    setindividualMovie(false);
  };

  return (
    <div className='App'>
      {onWatchTrailer && (
        <Trailer
          backToHomePage={backToHomePage}
          trailer={trailer}
          displayMovieDetails={displayMovieDetails}
        />
      )}
      {individualMovie && (
        <MovieDetails
          displayTrailer={displayTrailer}
          individualMovie={individualMovie}
          backToHomePage={backToHomePage}
          hasTrailer={hasTrailer}
        />
      )}

      {onHomepage && (
        <>
          <Header />
          <Homepage
            movies={movies}
            displayMovieDetails={displayMovieDetails}
            error={error}
          />
        </>
      )}
    </div>
  );
}

export default App;
