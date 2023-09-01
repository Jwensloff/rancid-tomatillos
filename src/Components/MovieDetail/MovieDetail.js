import './MovieDetail.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import PropTypes, { array, arrayOf } from 'prop-types';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getMovieTrailer, getMovieDetails } from '../../apiCalls';
import { useEffect, useState } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';
function MovieDetails({ setTrailer, setError, error, navigateTo404ErrorPage }) {
  const [hasTrailer, setHasTrailer] = useState(true);

  const [individualMovie, setIndividualMovie] = useState({});

  const id = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(id)
      .then((data) => {
        setError({
          hasError: false,
          msg: ``,
          failedAt: '',
        });
        return setIndividualMovie(data.movie);
      })
      .catch((error) => {
        setError({
          hasError: true,
          msg: `${error}`,
          failedAt: 'indvidualMovie',
        })
        console.log('we are in the catch block-->', error)
        if(error == 'Error: 404'){
          console.log('we are in the 404 bb!!-->', error)
          navigate('/error404')
        } else {
        navigate('/error')
      }
      });
    getMovieTrailer(id)
      .then((data) => {
        setError({
          hasError: false,
          msg: ``,
          failedAt: '',
        })
       return setTrailer(data)
      })
      .catch((error) => {
        setHasTrailer(false);
      });
  }, []);

  let {
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
    <>
      {error.hasError ? (
        <ErrorPage error={error} />
      ) : (
        <section className='movieDetails'>
          <img className='movieDetails__img' src={backdrop_path} />
          <Link className='button' to='/'>
            <FontAwesomeIcon icon={faXmark} color='white' size='2x' />
          </Link>
          <section className='movieDetails__block'>
            <div className='title-wrapper'>
              <h2 className='movieDetails__title'>{title}</h2>
              {hasTrailer && (
                <Link to={`/${id}/trailer`}>
                  <button className='trailer-btn'>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      color='#ff0000'
                      size='lg'
                    />{' '}
                    Trailer
                  </button>
                </Link>
              )}
            </div>
            <div className='movie-details-sub'>
              <p className='movieDetails__text'>{average_rating} / 10</p>
              <p className='movieDetails__text'>
                {convertMovieDuration(runtime)}
              </p>
              <p className='movieDetails__text'>{genres?.join(', ')}</p>
              <p className='movieDetails__text'>{release_date?.slice(0, 4)}</p>
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
      )}
    </>
  );
}

export default MovieDetails;

MovieDetails.propTypes = {
  setTrailer: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};
