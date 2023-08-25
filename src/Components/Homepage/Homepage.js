import './Homepage.scss';
import MoviePoster from '../MoviePoster/MoviePoster';

function Homepage({ movies, displayMovieDetails }) {
  const movieCards = movies.map((movie) => (
    <MoviePoster
      key={movie.id}
      id={movie.id}
      posterPath={movie.poster_path}
      title={movie.title}
      displayMovieDetails={displayMovieDetails}
    />
  ));

  return <div className='moviesContainer'>{movieCards}</div>;
}

export default Homepage;
