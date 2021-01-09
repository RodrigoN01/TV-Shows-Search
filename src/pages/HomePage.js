import { useContext } from 'react';

// Context
import ShowsContext from '../context/shows/showsContext';

// Components
import SearchBar from '../components/SearchBar';
import ListItem from '../components/ListItem';

const HomePage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className='homepage'>
      <SearchBar />
      {loading ? (
        <h2>Loading..</h2>
      ) : (
        <div>
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : 'No Rating'
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
