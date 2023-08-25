// add a an onClick to the movie poster
// Add a new state for movie details
// state starts out as 0
// conditional logic --> if movieDetails = false --> display homePage
// else if movie details = true --> don't display homePage
import './MovieDetail.scss'
function MovieDetails({ movieDetails, backToHomePage }) {
  let { id, poster_path, backdrop_path, title, average_rating, release_date } =
    movieDetails;
  return (
    <section>
      <img src={backdrop_path} />
      <div>
        <h2>{title}</h2>
        <p>{average_rating}</p>
        <p>{release_date}</p>
        <button onClick={() => backToHomePage()}>Back to Home</button>
      </div>
    </section>
  );
}

export default MovieDetails;
