import './Trailer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

function Trailer({ trailer, loading, setLoading}) {
  const { key, movie_id } = trailer;

  const id = useParams().id;

  return (
    <div className='trailer-page'>
      {loading && <Loading />}
      <div className='button-wrapper'>
        <Link to={`/rancid-tomatillos/${id}`}>
          <button className='back-to-movie-details-button on-trailer-page-button'>
            <FontAwesomeIcon icon={faCircleArrowLeft} />
          </button>
        </Link>
        <Link to='/rancid-tomatillos'>
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
    movie_id: PropTypes.number,
  }),
};

Trailer.defaultProps = {
  trailer: {
    key: null,
    movie_id: null,
  },
};
