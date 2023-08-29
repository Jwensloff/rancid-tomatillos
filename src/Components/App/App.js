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
  const [onHomepage, setOnHomepage] = useState(true);
  // const [individualMovie, setindividualMovie] = useState(false);
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState({});
  // const [onWatchTrailer, setOnWatchTrailer] = useState(false);
  const [error, setError] = useState({
    hasError: false,
    msg: '',
    failedAt: '',
  });
  const [hasTrailer, setHasTrailer] = useState(true);

  console.log('movies before', movies);

  useEffect(() => {
    console.log('UseEffect is firing from app.js');
    getMovies()
      .then((data) => {
        console.log('from App.js', data);
        return setMovies(data.movies);
      })
      .catch((error) => {
        // setError({ hasError: true, msg: `${error}`, failedAt: 'homePage' });
        console.log('an error has occured');
      });
  }, []);
  console.log('movies after', movies);

  // const displayMovieDetails = (id) => {
  //   setOnHomepage(false);
  //   getMovies(id)
  //     .then((data) => setindividualMovie(data))
  //     .catch((error) => {
  //       setError({
  //         hasError: true,
  //         msg: `${error}`,
  //         failedAt: 'individualMovie',
  //       });
  //       setOnHomepage(false);
  //     });
  //   getMovieTrailer(id)
  //     .then((data) => {
  //       setHasTrailer(true);
  //       return setTrailer(data);
  //     })
  //     .catch((error) => setHasTrailer(false));
  //   setOnWatchTrailer(false);
  // };

  const backToHomePage = () => {
    // setindividualMovie(false);
    // setOnHomepage(true);
    // setOnWatchTrailer(false);
    setError({ hasError: false, msg: '', failedAt: '' });
  };

  const displayTrailer = () => {
    // setOnWatchTrailer(true);
    // setindividualMovie(false);
  };

  return (
    <div className='App'>
      {/* {onWatchTrailer && (
        <Trailer
          backToHomePage={backToHomePage}
          // trailer={trailer}
          displayMovieDetails={displayMovieDetails}
        />
      )} */}
      {/* {individualMovie && (
        <MovieDetails
          displayTrailer={displayTrailer}
          individualMovie={individualMovie}
          backToHomePage={backToHomePage}
          hasTrailer={hasTrailer}
        />
      )} */}
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Homepage
                movies={movies}
                // displayMovieDetails={displayMovieDetails}
              />
            </>
          }
        />
        <Route
          path='/:id'
          element={
            <MovieDetails
              // individualMovie={individualMovie}
              // displayTrailer={displayTrailer}
              // backToHomePage={backToHomePage}
              hasTrailer={hasTrailer}
            />
          }
        />
        {/* <Route path='/:id/:trailer' element={<Trailer/>}/> */}
      </Routes>
      {/* {onHomepage && (
        <div className='page'>
          <Header />
          <Homepage movies={movies} displayMovieDetails={displayMovieDetails} />
        </div>
      )} */}
      {/* {error.hasError && (
        <ErrorPage error={error} backToHomePage={backToHomePage} />
      )} */}
    </div>
  );
}

export default App;
