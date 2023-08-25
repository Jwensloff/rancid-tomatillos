import './App.scss';
import Header from '../Header/Header';
import MoviePoster from '../MoviePoster/MoviePoster';
import Homepage from '../Homepage/Homepage';
import movieData from './movieData';
import { useState } from 'react';
import MovieDetails from '../MovieDetail/MovieDetail';

function App() {

 const [movieDetails, setMovieDetails] = useState(false);

 const displayMovieDetails = (id) => {
  const movie = movieData.find(movie => movie.id === id)
  setMovieDetails(movie)
 }


  return (
    <div className='App'>
      <Header />
      <MovieDetails movieDetails={movieDetails}/>
      {!movieDetails && <Homepage movies={movieData.movies} />}
      Hello world
    </div>
  );
}

export default App;