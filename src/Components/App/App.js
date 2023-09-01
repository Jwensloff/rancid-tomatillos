import './App.scss';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import { useEffect, useState } from 'react';
import MovieDetails from '../MovieDetail/MovieDetail';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getMovies, getMovieTrailer } from '../../apiCalls';
import Trailer from '../Trailer/Trailer';
import { Routes, Route } from 'react-router-dom';
import ErrorPage404 from '../ErrorPage404/ErrorPage404';
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
        console.log('this is the error -->',error)
       return  setError({ hasError: true, msg: `${error}`, failedAt: 'homePage' });
      });
    }, []);
    
    return (
      <div className='App'>
      <Routes>
      {error.hasError && <Route path='/error' element={<ErrorPage error={error} />}/>}
        <Route
          path='/'
          element={
            <>
              <Header />
              <Homepage movies={movies} error={error}/>
            </>
          }
        />
        <Route
          path='/:id'
          element={<MovieDetails setTrailer={setTrailer} setError={setError} error={error}/>}
          />
        <Route path='/:id/:trailer' element={<Trailer trailer={trailer}/>} />
        <Route
          path='*'
            element={<ErrorPage404 />}
          />            
          <Route 
          path='/error'
          element={<ErrorPage404 />}
          />
      </Routes>
    </div>
  );
}

export default App;
