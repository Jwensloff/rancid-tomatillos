import './App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import MovieDetails from '../MovieDetail/MovieDetail';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getMovies } from '../../apiCalls';
import Trailer from '../Trailer/Trailer';
import Loading from '../Loading/Loading';
import ErrorPage404 from '../ErrorPage404/ErrorPage404';
import Search from '../Search/Search';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    hasError: false,
    msg: '',
    failedAt: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    getMovies()
      .then(data => {
        setLoading(false);
        setMovies(data.movies);
        setFilteredMovies(data.movies);
      })
      .catch(error => {
        setLoading(false);
        setError({
          hasError: true,
          msg: `${error}`,
          failedAt: 'homePage',
        });

        if (error == 'Error: 404') {
          navigate('/error404');
        } else {
          navigate('/error');
        }
      });
  }, []);

  const filterMovies = searchInput => {
    setFilteredMovies(
      movies.filter(movie =>
        movie.title.toLowerCase().includes(searchInput.toLowerCase()),
      ),
    );
  };

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
              <Search filterMovies={filterMovies} />
              {loading && <Loading />}
              <Homepage movies={filteredMovies} error={error} />
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
              setLoading={setLoading}
              loading={loading}
            />
          }
        />
        <Route path='/:id/:trailer' element={<Trailer trailer={trailer} />} />
        <Route path='*' element={<ErrorPage404 error={error} />} />
      </Routes>
    </div>
  );
}

export default App;
