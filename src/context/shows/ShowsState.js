import { useReducer } from 'react';
import axios from 'axios';
import ShowsContext from './showsContext';
import ShowsReducer from './showsReducer';
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
} from '../types';

const ShowsState = ({ children }) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `http://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    console.log(data);

    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        ...state,
        searchShows,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
