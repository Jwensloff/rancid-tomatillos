import './Homepage.scss';
import MoviePoster from '../MoviePoster/MoviePoster';
import { arrayOf } from 'prop-types';
import PropTypes from 'prop-types';

function Homepage({ movies, displayMovieDetails }) {
  const movieCards = movies.map(movie => (
    <MoviePoster
      key={movie.id}
      id={movie.id}
      posterPath={movie.poster_path}
      title={movie.title}
      // displayMovieDetails={displayMovieDetails}
    />
  ));

  return <div className='moviesContainer'>{movieCards}</div>;
}

export default Homepage;

Homepage.propTypes = {
  movies: arrayOf(PropTypes.object).isRequired,
  displayMovieDetails: PropTypes.func.isRequired,
};
