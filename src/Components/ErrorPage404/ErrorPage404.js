import './ErrorPage404.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import img from './Error404Img.jpeg';

function ErrorPage404() {
  return (
    <div className='img-wrapper'>
      <img
        className='img'
        src={img}
        alt={'404 error, page not found'}
      />
      <Link to='/'>
        <button
          className='error-to-home-button'
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </Link>
    </div>
  );
}
export default ErrorPage404;
