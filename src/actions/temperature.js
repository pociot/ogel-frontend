import axios from 'axios';

export const FETCH_TEMPERATURES_REQUEST = 'FETCH_TEMPERATURES_REQUEST';
export const FETCH_TEMPERATURES_SUCCESS = 'FETCH_TEMPERATURES_SUCCESS';
export const FETCH_TEMPERATURES_FAILURE = 'FETCH_TEMPERATURES_FAILURE';

function requestFetchTemperatures() {
  return {
    type: FETCH_TEMPERATURES_REQUEST,
    isFetching: true,
  };
}

function fetchTemperaturesSuccess(temperatures) {
  return {
    type: FETCH_TEMPERATURES_SUCCESS,
    isFetching: false,
    temperatures,
  };
}

function fetchTemperaturesError(message) {
  return {
    type: FETCH_TEMPERATURES_FAILURE,
    isFetching: false,
    message,
  };
}

export function fetchTemperatures() {
  return dispatch => {
    dispatch(requestFetchTemperatures());

    return axios.get(process.env.REACT_APP_API_URL + '/reports/temperature')
    .then(responseJson => ({
      temperatures: responseJson.data,
      responseJson,
    }))
    .then(({temperatures, responseJson}) => {
      if (!responseJson.data) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(fetchTemperaturesError(temperatures.message));
        return Promise.reject(temperatures);
      }
      // Dispatch the success action
      dispatch(fetchTemperaturesSuccess(temperatures));
      return Promise.resolve(temperatures);
    })
    .catch(err => console.error('Error: ', err));
  };
}
