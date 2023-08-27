import './Trailer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Trailer ({ trailer, displayMovieDetails, backToHomePage }) {
const { key, movie_id } = trailer

  return (
  <div className="trailer-page">
    <div className='button-wrapper'>
      <button onClick={() => displayMovieDetails(movie_id)} ><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
      <button onClick={() => backToHomePage()} > <FontAwesomeIcon icon={faHouse} /> </button>
    </div>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${key}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
}

export default Trailer;
