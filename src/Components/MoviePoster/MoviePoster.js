import './MoviePoster.scss';

function MoviePoster({id, posterPath, title, displayMovieDetails}) {
  return (
    <img 
    className="moviePoster" 
    id={id} src={posterPath} 
    alt={`${title} movie poster`} 
    onClick={() => displayMovieDetails(id)}
    />
  );
}

export default MoviePoster;
