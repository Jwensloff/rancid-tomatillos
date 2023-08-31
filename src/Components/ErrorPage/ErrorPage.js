import Header from '../Header/Header';
import './ErrorPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function ErrorPage({error}) {
  console.log(error)
  return (
    
    <section className='error-page-wrapper'>
      <div className='error-wrapper'>
        <p>{error.msg}</p>
      </div>
    </section>
  )

};

export default ErrorPage
