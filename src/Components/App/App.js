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

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  const displayMovieDetails = (id) => {
    setOnHomepage(false);
    getMovies(id).then((data) => setindividualMovie(data));
    getMovieTrailer(id).then((data) => setTrailer(data));
    setOnWatchTrailer(false);
  };

  const backToHomePage = () => {
    setindividualMovie(false);
    setOnHomepage(true);
    setOnWatchTrailer(false);
  };
  const error = false;

  const displayTrailer = () => {
    setOnWatchTrailer(true);
    setindividualMovie(false);
  };

  return (
    <div className='App'>
      {error && <ErrorPage />}

      {onWatchTrailer && <Trailer backToHomePage={backToHomePage} trailer={trailer} displayMovieDetails={displayMovieDetails} />}
      {individualMovie && (
        <MovieDetails
          displayTrailer={displayTrailer}
          individualMovie={individualMovie}
          backToHomePage={backToHomePage}
        />
      )}

      {onHomepage && (
        <>
          <Header />
          <Homepage movies={movies} displayMovieDetails={displayMovieDetails} />
        </>
      )}
    </div>
  );
}

export default App;
