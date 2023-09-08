import './ErrorPage404.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import img from './Error404Img.jpeg';
import PropTypes from 'prop-types';

function ErrorPage404({ error }) {
  return (
    <div className='img-wrapper'>
      <img className='img' src={img} alt={'404 error, page not found'} />
      {error.failedAt !== 'homePage' && (
        <Link to='/rancid-tomatillos'>
          <button className='error-to-home-button'>
            <FontAwesomeIcon icon={faHouse} />
          </button>
        </Link>
      )}
    </div>
  );
}
export default ErrorPage404;

ErrorPage404.propTypes = {
  error: PropTypes.shape({
    hasError: PropTypes.bool,
    msg: PropTypes.string,
    failedAt: PropTypes.string,
  }),
};