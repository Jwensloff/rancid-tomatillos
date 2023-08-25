import './Homepage.scss';
import MoviePoster from '../MoviePoster/MoviePoster';

function Homepage({ movies }) {
  const movieCards = movies.map((movie) => (
    <MoviePoster
      key={movie.id}
      id={movie.id}
      posterPath={movie.poster_path}
      title={movie.title}
    />
  ));

  return <div className='moviesContainer'>{movieCards}</div>;
}

export default Homepage;
