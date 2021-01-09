import { useState, useContext } from 'react';

// Context
import ShowsContext from '../context/shows/showsContext';
import AlertsContext from '../context/alerts/alertsContext';

// Components
import Alert from './Alert';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { searchShows } = useContext(ShowsContext);
  const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    if (searchTerm === '') {
      setAlert('Please enter something', 'danger');
    } else {
      searchShows(searchTerm);
    }
  };

  return (
    <div className='searchbar'>
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
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
