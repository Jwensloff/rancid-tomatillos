import { useState } from 'react';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Search({ filterMovies }) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className='block'>
      {searchInput && (
        <button
          className='exitSearch-btn'
          onClick={() => {
            setSearchInput('');
            filterMovies('');
          }}
        >
          {searchInput}
          <i className='xIcon'><FontAwesomeIcon icon={faXmark} color='white' /></i>
        </button>
      )}
      <form className='searchForm'>
        <input
          className='search'
          type='search'
          value={searchInput}
          onChange={e => {
            setSearchInput(e.target.value);
          }}
          onKeyUp={() => filterMovies(searchInput)}
        />
        <div className='search-btn'>
          <FontAwesomeIcon icon={faMagnifyingGlass} color='white' />
        </div>
      </form>
    </div>
  );
}

export default Search;
