import './App.scss';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import { useEffect, useState } from 'react';
import MovieDetails from '../MovieDetail/MovieDetail';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getMovies, getMovieTrailer } from '../../apiCalls';
import Trailer from '../Trailer/Trailer';
function App() {
  const [movieDetails, setMovieDetails] = useState(false);
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState(false);
  
  useEffect(() => {
   getMovies().then(data => setMovies(data))
  }, [])

  const displayMovieDetails = id => {
    getMovies(id).then(data => setMovieDetails(data))
    getMovieTrailer(id).then(data => setTrailer(data))
  };

  const backToHomePage = () => {
    setMovieDetails(false);
  };
  const error = false;

  return (
    <div className='App'>
      {error && <ErrorPage />}

      {movieDetails ? (
        <>
        <MovieDetails
        movieDetails={movieDetails}
        backToHomePage={backToHomePage}
        />
        <Trailer trailer={trailer}/>
        </>
        ) : (
          <>
        <Header />
        <Homepage
          movies={movies}
          displayMovieDetails={displayMovieDetails}
        />
        </>
      )}
    </div>
  );
}

export default App;
