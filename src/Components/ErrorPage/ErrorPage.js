import Header from '../Header/Header';
import './ErrorPage.scss';

function ErrorPage({error}) {

  return (
    
    <section>
      {error.failedAt === 'homePage' && <Header />}
      {error.failedAt === 'individualMovie' && <button>Back to homepage</button>}
      <div className='error-page-wrapper'>
      <p>{error.msg}</p>
      </div>
    </section>
  )

};

export default ErrorPage
