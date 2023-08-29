import './MoviePoster.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function MoviePoster({id, posterPath, title, displayMovieDetails}) {
  return (
    <Link to={`/${id}`}>
      <img 
      className="moviePoster" 
      id={id} src={posterPath} 
      alt={`${title} movie poster`} 
      onClick={() => displayMovieDetails(id)}
      />
    </Link>
  );
}

export default MoviePoster;

MoviePoster.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  displayMovieDetails: PropTypes.func.isRequired
}