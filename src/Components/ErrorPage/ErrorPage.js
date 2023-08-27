import Header from '../Header/Header';
import './ErrorPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function ErrorPage({error, backToHomePage}) {

  return (
    
    <section className='error-page-wrapper'>
      {error.failedAt === 'homePage' && <Header />}
      {error.failedAt === 'individualMovie' && <button className='exitError-btn' onClick={() => backToHomePage()} > <FontAwesomeIcon icon={faHouse} /> </button>}
      <div className='error-wrapper'>
        <p>{error.msg}</p>
      </div>
    </section>
  )

};

export default ErrorPage
