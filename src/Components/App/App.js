import './App.scss';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import { useEffect, useState } from 'react';
import MovieDetails from '../MovieDetail/MovieDetail';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getMovies, getMovieTrailer } from '../../apiCalls';
import Trailer from '../Trailer/Trailer';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState({});

  const [error, setError] = useState({
    hasError: false,
    msg: '',
    failedAt: '',
  });

  useEffect(() => {
    getMovies()
      .then((data) => {
        return setMovies(data.movies);
      })
      .catch((error) => {
        setError({ hasError: true, msg: `${error}`, failedAt: 'homePage' });
      });
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Homepage movies={movies} />
            </>
          }
        />
        <Route
          path='/:id'
          element={<MovieDetails setTrailer={setTrailer} setError={setError} />}
        />
        <Route path='/:id/:trailer' element={<Trailer trailer={trailer} />} />
      </Routes>
      {error.hasError && <ErrorPage error={error} />}
    </div>
  );
}

export default App;
