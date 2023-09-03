import { useEffect, useState } from 'react';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function Search({ searchInput, setSearchInput }) {
  return (
    <div className='block'>
      {searchInput && (
        <button
          className='exitSearch-btn'
          onClick={() => {
            setSearchInput('');
          }}
        >
          {searchInput}
          <i className='xIcon'>
            <FontAwesomeIcon icon={faXmark} color='white' />
          </i>
        </button>
      )}
      <form className='searchForm' onSubmit={e => e.preventDefault()}>
        <input
          className='search'
          type='search'
          value={searchInput}
          onChange={e => {
            setSearchInput(e.target.value);
          }}
        />
        <div className='search-btn'>
          <FontAwesomeIcon icon={faMagnifyingGlass} color='white' />
        </div>
      </form>
    </div>
  );
}

export default Search;

Search.propTypes = {
  setSearchInput: PropTypes.func,
  searchInput: PropTypes.string
};
