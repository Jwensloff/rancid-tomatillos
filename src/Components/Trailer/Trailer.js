import './Trailer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

function Trailer({ trailer }) {
  const { key, movie_id } = trailer;

  const id = useParams().id;

  return (
    <div className='trailer-page'>
      <div className='button-wrapper'>
        <Link to={`/${id}`}>
          <button className='back-to-movie-details-button on-trailer-page-button'>
            <FontAwesomeIcon icon={faCircleArrowLeft} />
          </button>
        </Link>
        <Link to='/'>
          <button className='back-to-home-button on-trailer-page-button'>
            <FontAwesomeIcon icon={faHouse} />
          </button>
        </Link>
      </div>
      <iframe
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${key}?autoplay=1`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
}

export default Trailer;

Trailer.propTypes = {
  trailer: PropTypes.shape({
    key: PropTypes.string,
    movie_id: PropTypes.string,
  }),
};

Trailer.defaultProps = {
  trailer: {
    key: null,
    movie_id: null,
  },
};
