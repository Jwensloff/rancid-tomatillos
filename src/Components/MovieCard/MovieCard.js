import './MovieCard.scss';

function MovieCard({id, posterPath, title}) {
  return (
    <img className="moviePoster" id={id} src={posterPath} alt={`${title} movie poster`}/>
  );
}

export default MovieCard;
