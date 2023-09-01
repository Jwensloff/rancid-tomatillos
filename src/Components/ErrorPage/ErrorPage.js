import Header from '../Header/Header';
import './ErrorPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ErrorPage({ error }) {
  console.log(error);
  return (
    <section className='error-page-wrapper'>
      {error.failedAt === 'indvidualMovie' && (
        <Link className='exit-error-btn' to='/'>
          <FontAwesomeIcon icon={faXmark} color='white' size='2x' />
        </Link>
      )}
      <div className='error-wrapper'>
        <p>{error.msg}</p>
      </div>
    </section>
  );
}

export default ErrorPage;
