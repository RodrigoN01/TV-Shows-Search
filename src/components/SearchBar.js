import { useState, useContext } from 'react';

// Context
import ShowsContext from '../context/shows/showsContext';

// Components
import Alert from './Alert';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchShows } = useContext(ShowsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    searchShows(searchTerm);
  };

  return (
    <div className='searchbar'>
      <Alert message='Please enter something' type='danger' />
      <form className='searchbar__form'>
        <input
          type='text'
          placeholder='Search for TV Show'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='btn btn-block' onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
