import './App.scss';
import Header from '../Header/Header';
import MovieCard from '../MovieCard/MovieCard';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import movieData from './movieData';

function App() {
  return (
    <div className='App'>
      <Header />
      <MovieCard />
      <MoviesContainer />
      Hello world
    </div>
  );
}

export default App;
