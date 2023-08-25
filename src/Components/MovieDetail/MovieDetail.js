import './MovieDetail.scss'
import PropTypes, { array, arrayOf } from 'prop-types'

function MovieDetails({ movieDetails, backToHomePage }) {
  let { id, poster_path, backdrop_path, title, release_date, overview, genres, budget, revenue, runtime, tagline, average_rating} =
    movieDetails;
  return (
    <section className='movieDetails'>
      <img className='movieDetails__img' src={backdrop_path} />
      <section className='movieDetails__block'>
        <h2 className='movieDetails__title'>{title}</h2>
        <p className='movieDetails__text'>{tagline}</p>
        <p className='movieDetails__text'>{overview}</p>
        <p className='movieDetails__text'>{average_rating}</p>
        <p className='movieDetails__text'>{release_date}</p>
        <p className='movieDetails__text'>{budget}</p>
        <p className='movieDetails__text'>{revenue}</p>
        <p className='movieDetails__text'>{runtime}</p>
        <p className='movieDetails__text'>{genres.reduce((acc, genre) => acc + genre + ', ', 'Genres: ')}</p>
        <button className='movieDetails__btn' onClick={() => backToHomePage()}>BACK</button>
      </section>
    </section>
  );
}

export default MovieDetails;

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    overview: PropTypes.string.isRequired,
    average_rating: PropTypes.number,
    release_date: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    genres: arrayOf(PropTypes.string)
  }).isRequired,
  backToHomePage: PropTypes.func.isRequired
}
