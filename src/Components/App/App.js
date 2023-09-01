import './App.scss';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import { useEffect, useState } from 'react';
import MovieDetails from '../MovieDetail/MovieDetail';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getMovies, getMovieTrailer } from '../../apiCalls';
import Trailer from '../Trailer/Trailer';
import Loading from '../Loading/Loading';

import { Routes, Route, useNavigate } from 'react-router-dom';
import ErrorPage404 from '../ErrorPage404/ErrorPage404';
function App() {
  const [onHomepage, setOnHomepage] = useState(false);
  const [individualMovie, setindividualMovie] = useState(false);
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [onWatchTrailer, setOnWatchTrailer] = useState(false);
  const [error, setError] = useState({hasError: false, msg: '', failedAt: ''});
  const [hasTrailer, setHasTrailer] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then(data => {
        setIsLoading(false)
        setOnHomepage(true)
        return setMovies(data)
      })
      .catch(error => {
        setError({hasError: true, msg: `${error}`, failedAt: 'homePage'})
        setOnHomepage(false)
      });
  }, []);

  const displayMovieDetails = id => {

import { Routes, Route, useNavigate } from 'react-router-dom';
import ErrorPage404 from '../ErrorPage404/ErrorPage404';
function App() {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState({});

  const [error, setError] = useState({
    hasError: false,
    msg: '',
    failedAt: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    getMovies()
      .then((data) => {
        return setMovies(data.movies);
      })
      .catch((error) => {
         setError({
          hasError: true,
          msg: `${error}`,
          failedAt: 'homePage',
        });
        

        if(error == 'Error: 404'){
          navigate('/error404')
        } else {
        navigate('/error')
      }});
  }, []);

  return (
    <div className='App'>
      <Routes>
          <Route path='/error404' element={<ErrorPage404 error={error} />} />
          <Route path='/error' element={<ErrorPage error={error} />} />
        <Route
          path='/'
          element={
            <>
              <Header />
              <Homepage movies={movies} error={error} />
            </>
          }
        />
        <Route
          path='/:id'
          element={
            <MovieDetails
              setTrailer={setTrailer}
              setError={setError}
              error={error}
            />
          }
        />
        <Route path='/:id/:trailer' element={<Trailer trailer={trailer} />} />
        <Route path='*' element={<ErrorPage404 error={error}/>} />
        {/* <Route path='/error' element={<ErrorPage404 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
