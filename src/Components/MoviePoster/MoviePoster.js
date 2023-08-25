import './MoviePoster.css';

function MoviePoster({id, posterPath, title}) {
  return (
    <img className="moviePoster" id={id} src={posterPath} alt={`${title} movie poster`}/>
  );
}

export default MoviePoster;
