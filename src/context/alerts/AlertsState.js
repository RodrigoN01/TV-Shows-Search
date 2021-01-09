import { useReducer } from 'react';
import AlertsContext from './alertsContext';
import AlertsReducer from './alertsReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertsState = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertsReducer, initialState);

  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        type,
      },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertsContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertsContext.Provider>
  );
};

export default AlertsState;
