import './App.scss';
import Header from '../Header/Header';
import MovieCard from '../MoviePoster/MoviePoster';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import movieData from './movieData';

function App() {
  return (
    <div className='App'>
      <Header />
      <MoviesContainer movies={movieData.movies} />
      Hello world
    </div>
  );
}

export default App;
