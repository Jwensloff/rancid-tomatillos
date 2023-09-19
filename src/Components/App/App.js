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
  const [searchInput, setSearchInput] = useState('');
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

  useEffect(() => {
    filterMovies(searchInput);
  }, [searchInput]);

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
          path='/rancid-tomatillos'
          element={
            <>
              <Header />
              <Search
                filterMovies={filterMovies}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
              {loading && <Loading />}
              <Homepage filteredMovies={filteredMovies} error={error} />
            </>
          }
        />
        <Route
          path='/rancid-tomatillos/:id'
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

        <Route
          path='/rancid-tomatillos/:id/:trailer'
          element={
            <Trailer
              trailer={trailer}
              setLoading={setLoading}
              loading={loading}
            />
          }
        />
        <Route path='*' element={<ErrorPage404 error={error} />} />
      </Routes>
    </div>
  );
}

export default App;
