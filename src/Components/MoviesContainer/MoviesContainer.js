import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';

function MoviesContainer({movies}) {
  const movieCards = movies.map(movie => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      posterPath={movie.poster_path}
      title={movie.title}
    />
  ));

  return (
    <div>
      {movieCards}
    </div>
  );
}

export default MoviesContainer;
