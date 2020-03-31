import axios from 'axios';

export const FETCH_OEE_REQUEST = 'FETCH_OEE_REQUEST';
export const FETCH_OEE_SUCCESS = 'FETCH_OEE_SUCCESS';
export const FETCH_OEE_FAILURE = 'FETCH_OEE_FAILURE';

function requestFetchOee() {
  return {
    type: FETCH_OEE_REQUEST,
    isFetching: true,
  };
}

function fetchOeeSuccess(oee) {
  return {
    type: FETCH_OEE_SUCCESS,
    isFetching: false,
    oee,
  };
}

function fetchOeeError(message) {
  return {
    type: FETCH_OEE_FAILURE,
    isFetching: false,
    message,
  };
}

export function fetchOee() {
  return dispatch => {
    dispatch(requestFetchOee());

    return axios.get(process.env.REACT_APP_API_URL + '/reports/oee')
    .then(responseJson => ({
      oee: responseJson.data,
      responseJson,
    }))
    .then(({oee, responseJson}) => {
      if (!responseJson.data) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(fetchOeeError(oee.message));
        return Promise.reject(oee);
      }
      // Dispatch the success action
      dispatch(fetchOeeSuccess(oee));
      return Promise.resolve(oee);
    })
    .catch(err => console.error('Error: ', err));
  };
}
