import './Homepage.scss';
import MoviePoster from '../MoviePoster/MoviePoster';
import { arrayOf } from 'prop-types';
import PropTypes from 'prop-types';
import ErrorPage from '../ErrorPage/ErrorPage';

function Homepage({ movies, error }) {
  const movieCards = movies.map(movie => (
    <MoviePoster
      key={movie.id}
      id={movie.id}
      posterPath={movie.poster_path}
      title={movie.title}
    />
  ));

  return (
    <div className='moviesContainer'>
      {movieCards}
      {error.hasError && <ErrorPage error={error} />}
    </div>
  );
}

export default Homepage;

Homepage.propTypes = {
  movies: arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
      average_rating: PropTypes.number,
      release_date: PropTypes.string,
    }),
  ).isRequired,
  error: PropTypes.shape({
    hasError: PropTypes.bool,
    msg: PropTypes.string,
    failedAt: PropTypes.string,
  }),
};
