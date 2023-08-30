import './MovieDetail.scss';
import PropTypes, { array, arrayOf } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { getMovies, getMovieTrailer, getMovieDetails } from '../../apiCalls';
import { useEffect, useState } from 'react';

function MovieDetails({
  individualMovie,
  setIndividualMovie,
  setTrailer,
  // backToHomePage,
  // displayTrailer,
  // getMovieDetails,
  hasTrailer,
}) {
  // const [individualMovie, setindividualMovie] = useState({});
  // const [onHomepage, setOnHomepage] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [trailer, setTrailer] = useState({});
  // const [onWatchTrailer, setOnWatchTrailer] = useState(false);
  const [error, setError] = useState({
    hasError: false,
    msg: '',
    failedAt: '',
  });
  const id = useParams().id;

  useEffect(() => {
    // console.log('useEffect is firing from the MovieDetails');

    getMovieDetails(id)
      .then((data) => {
        // console.log('individual movie data', data);
        return setIndividualMovie(data.movie);
      })
      .catch((error) => {
        setError({
          hasError: true,
          msg: `${error}`,
          failedAt: 'individualMovie',
        });
        // setOnHomepage(false);
      
    // getMovieTrailer(id).then((data) => {
    //   console.log('trailer data', data);
    //   return setTrailer(data.videos);
    });
    // .catch((error) => setHasTrailer(false));
    // setOnWatchTrailer(false);
  }, []);

  let {
    // id,
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
  } = individualMovie;

  console.log('individualMovie', individualMovie);
  
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

  console.log(' id', id);

  return (
    <section className='movieDetails'>
      <img className='movieDetails__img' src={backdrop_path} />
      <Link className='button' to='/'>
        <FontAwesomeIcon
          // onClick={() => backToHomePage()}
          icon={faXmark}
          color='white'
          size='2x'
        />
      </Link>
      <section className='movieDetails__block'>
        <div className='title-wrapper'>
          <h2 className='movieDetails__title'>{title}</h2>
          {hasTrailer && (
            <Link to={`/:${id}/trailer`}>
              <button className='trailer-btn'>
                {/* <button className='trailer-btn' onClick={() => displayTrailer()}> */}
                <FontAwesomeIcon icon={faYoutube} color='#ff0000' size='lg' />{' '}
                Trailer
              </button>
            </Link>
          )}
        </div>
        <div className='movie-details-sub'>
          <p className='movieDetails__text'>{average_rating} / 10</p>
          <p className='movieDetails__text'>{convertMovieDuration(runtime)}</p>
          {/* <p className='movieDetails__text'>{genres.join(', ')}</p> */}
          {/* <p className='movieDetails__text'>{release_date.slice(0, 4)}</p> */}
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
  individualMovie: PropTypes.shape({
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
