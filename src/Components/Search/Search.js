import { useState } from 'react';

function Search({ filterMovies }) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <form>
      <input
        type='search'
        value={searchInput}
        onChange={e => {
          setSearchInput(e.target.value);
        }}
        onKeyUp={() => filterMovies(searchInput)}
      />
      <input
        type='submit'
        onClick={e => {
          e.preventDefault();
          filterMovies(searchInput);
        }}
      />
    </form>
  );
}

export default Search;
