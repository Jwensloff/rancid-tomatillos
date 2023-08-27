import './MovieDetail.scss';
import PropTypes, { array, arrayOf } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function MovieDetails({ movieDetails, backToHomePage }) {
  let {
    id,
    poster_path,
    backdrop_path,
    title,
    release_date,
    overview,
    genres,
    budget,
    revenue,
    runtime,
    average_rating,
  } = movieDetails;

  const convertMovieDuration = (runtime) => {
    let hours = Math.floor(runtime / 60);
    let minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  const convertDollarAmount = (dollarAmount) => {
    if (!dollarAmount) {
      return 'N/A';
    } else {
      return `$${dollarAmount.toLocaleString('en-US')}`;
    }
  };

  return (
    <section className='movieDetails'>
      <img className='movieDetails__img' src={backdrop_path} />
      <div className='button'>
        <FontAwesomeIcon
          onClick={() => backToHomePage()}
          icon={faXmark}
          color='white'
          size='2x'
        />
      </div>
      <section className='movieDetails__block'>
        <div className='title-wrapper'>
          <h2 className='movieDetails__title'>{title}</h2>
          <button className='trailer-btn'>
            <FontAwesomeIcon icon={faYoutube} color='#ff0000' size='1.5x' />  Trailer</button>
        </div>
        <div className='movie-details-sub'>
          <p className='movieDetails__text'>{average_rating} / 10</p>
          <p className='movieDetails__text'>{convertMovieDuration(runtime)}</p>
          <p className='movieDetails__text'>{genres.join(', ')}</p>
          <p className='movieDetails__text'>{release_date.slice(0, 4)}</p>
          <p className='movieDetails__text'>
            Budget: {convertDollarAmount(budget)}
          </p>
          <p className='movieDetails__text'>
            Revenue: {convertDollarAmount(revenue)}
          </p>
        </div>
        <p className='movieDetails__text overview'>{overview}</p>
      </section>
    </section>
  );
}

export default MovieDetails;

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    overview: PropTypes.string.isRequired,
    average_rating: PropTypes.number,
    release_date: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    genres: arrayOf(PropTypes.string),
  }).isRequired,
  backToHomePage: PropTypes.func.isRequired,
};
