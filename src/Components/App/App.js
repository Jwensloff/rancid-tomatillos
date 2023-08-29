import './App.scss';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import { useEffect, useState } from 'react';
import MovieDetails from '../MovieDetail/MovieDetail';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getMovies, getMovieTrailer } from '../../apiCalls';
import Trailer from '../Trailer/Trailer';
import Loading from '../Loading/Loading';

function App() {
  const [onHomepage, setOnHomepage] = useState(true);
  const [individualMovie, setindividualMovie] = useState(false);
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [onWatchTrailer, setOnWatchTrailer] = useState(false);
  const [error, setError] = useState({hasError: false, msg: '', failedAt: ''});
  const [hasTrailer, setHasTrailer] = useState(true);

  useEffect(() => {
    getMovies()
      .then(data => setMovies(data))
      .catch(error => {
        setError({hasError: true, msg: `${error}`, failedAt: 'homePage'})
        setOnHomepage(false)
      });
  }, []);

  const displayMovieDetails = id => {
    setOnHomepage(false);
    getMovies(id)
      .then(data => setindividualMovie(data))
      .catch(error => {
        setError({hasError: true, msg: `${error}`, failedAt: 'individualMovie'})
        setOnHomepage(false)
      });
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
    setError({hasError: false, msg: '', failedAt: ''})
  };

  const displayTrailer = () => {
    setOnWatchTrailer(true);
    setindividualMovie(false);
  };

  return (
    <div className='App'>
      <Loading />
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
        <div className='page'>
          <Header />
          <Homepage
            movies={movies}
            displayMovieDetails={displayMovieDetails}
          />
        </div>
      )}
      {error.hasError && <ErrorPage error={error} backToHomePage={backToHomePage}/>}
    </div>
  );
}

export default App;
