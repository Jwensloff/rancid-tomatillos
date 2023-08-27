import './App.scss';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import { useEffect, useState } from 'react';
import MovieDetails from '../MovieDetail/MovieDetail';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getMovies, getMovieTrailer } from '../../apiCalls';
import Trailer from '../Trailer/Trailer';

function App() {
  const [homepage, setHomepage] = useState(true);
  const [movieDetails, setMovieDetails] = useState(false);
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [watchTrailer, setWatchTrailer] = useState(false);

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  const displayMovieDetails = (id) => {
    setHomepage(false);
    getMovies(id).then((data) => setMovieDetails(data));
    getMovieTrailer(id).then((data) => setTrailer(data));
    setWatchTrailer(false);
  };

  const backToHomePage = () => {
    setMovieDetails(false);
    setHomepage(true);
    setWatchTrailer(false);
  };
  const error = false;

  const displayTrailer = () => {
    setWatchTrailer(true);
    setMovieDetails(false);
  };

  return (
    <div className='App'>
      {error && <ErrorPage />}

      {watchTrailer && <Trailer backToHomePage={backToHomePage} trailer={trailer} displayMovieDetails={displayMovieDetails} />}
      {movieDetails && (
        <MovieDetails
          displayTrailer={displayTrailer}
          movieDetails={movieDetails}
          backToHomePage={backToHomePage}
        />
      )}

      {homepage && (
        <>
          <Header />
          <Homepage movies={movies} displayMovieDetails={displayMovieDetails} />
        </>
      )}
    </div>
  );
}

export default App;
