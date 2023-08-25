import './MovieDetail.scss'
function MovieDetails({ movieDetails, backToHomePage }) {
  let { id, poster_path, backdrop_path, title, average_rating, release_date } =
    movieDetails;
  return (
    <section className='movieDetails'>
      <img className='movieDetails__img' src={backdrop_path} />
      <section className='movieDetails__block'>
        <h2 className='movieDetails__title'>{title}</h2>
        <p className='movieDetails__text'>Tagline</p>
        <p className='movieDetails__text'>Description</p>
        <p className='movieDetails__text'>{average_rating}</p>
        <p className='movieDetails__text'>{release_date}</p>
        <button className='movieDetails__btn' onClick={() => backToHomePage()}>BACK</button>
      </section>
    </section>
  );
}

export default MovieDetails;
