import './MovieDetail.scss'
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
        <button className='movieDetails__btn' onClick={() => backToHomePage()}>BACK</button>
      </section>
    </section>
  );
}

export default MovieDetails;
