import './MoviePoster.scss';
import PropTypes from 'prop-types'

function MoviePoster({id, posterPath, title, displayMovieDetails}) {
  return (
    <img 
    className="moviePoster" 
    id={id} src={posterPath} 
    alt={`${title} movie poster`} 
    onClick={() => displayMovieDetails(id)}
    />
  );
}

export default MoviePoster;

MoviePoster.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  displayMovieDetails: PropTypes.func.isRequired
}